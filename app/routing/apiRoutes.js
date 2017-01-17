//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');

console.log('api Routes loaded');

router.use(bodyParser.json());

var test = {};

router.get('/api/friends', function (req, res) {
    res.send("please be my friend");
}).post('/api/friends', function (req, res) {
    test = req.body;
    res.json(test);
});

module.exports = router;