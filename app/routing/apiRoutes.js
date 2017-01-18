//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var friendsList = require('../data/friends');

console.log('api Routes loaded');

router.use(bodyParser.json());

router.get('/api/friends', function (req, res) {
    res.send(friendsList);
}).post('/api/friends', function (req, res) {
    res.json(req.body);
});

module.exports = router;