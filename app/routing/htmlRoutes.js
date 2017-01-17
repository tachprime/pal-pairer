//jshint esversion:6
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

console.log("HTML Routes loaded");

//both routes point to homepage
router.get('/', homePage);
router.get('/home', homePage);

router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

function homePage(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
}

module.exports = router;