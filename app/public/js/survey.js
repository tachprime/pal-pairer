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
        }).fail(function () {
            console.log("Error posting user to API");
        });

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