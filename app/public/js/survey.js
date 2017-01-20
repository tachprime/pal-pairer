$(document).ready(function () {

    var hostUrl = window.location.origin;
    var api = '/api/friends';
    var user;

    console.log("Calling api at: %s", hostUrl + api);

    $('#survey-form').on('submit', function () {
        var self = $(this);

        user = createUserObj(self);

        console.log(user);

        $.ajax({
            url: hostUrl + api,
            method: 'Post',
            data: user
        }).done(function (res) {
            console.log(JSON.stringify(res, null, 2));

            showMatch(res);

        }).fail(function () {
            console.log("Error posting user to API");
        });

        $('#name-input').val("");
        $('#photo-input').val("");
        $('.choice-input').val("");

        return false;
    });

});

function createUserObj(self) {
    var user = {
        "name": '',
        "photo": '',
        "scores": []
    };

    self = self.serializeArray();

    user.name = self[0].value;
    user.photo = self[1].value;

    for (var i = 2; i < self.length; i++) {

        user.scores.push(self[i].value);

    }

    return user;
}

function showMatch(res) {
    $('.modal-body').empty();

    var img = $('<img src="' + res.photo + '" alt="pal photo">');
    var name = $('<p>' + res.name + '</p>');

    $('.modal-body').append(name);
    $('.modal-body').append(img);

    $('#myModal').modal('show');
}