//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var friendsList = require('../data/friends');

console.log('API Routes loaded');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/api/friends', function (req, res) {

    res.json(friendsList);

}).post('/api/friends', function (req, res) {

    let userData = req.body;

    let match = matchMaker(userData);

    res.json(match);
});

function matchMaker(user) {
    let deltalist = [];
    let match;

    for (var i = 0; i < friendsList.length; i++) {
        let delta = 0;

        for (var j = 0; j < friendsList[i].scores.length; j++) {
            delta += Math.abs(parseInt(user.scores[j] - friendsList[i].scores[j]));
        }

        deltalist.push(delta);
    }

    match = friendsList[getLowestScore(deltalist)];

    friendsList.push(user);

    return match;
}

function getLowestScore(scores) {
    let index;
    let lowestNum = 100;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] <= lowestNum) {
            lowestNum = scores[i];
            index = i;
        }
    }

    return index;
}

module.exports = router;