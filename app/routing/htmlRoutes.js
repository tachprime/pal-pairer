//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');

console.log("HTML Routes loaded");

//both routes point to homepage
router.get('/', homePage);
router.get('/home', homePage);

router.get('/survey', function (req, res) {
    res.send("Survey says!!!!!!");
});

function homePage(req, res) {
    res.send("Home Page");
}

module.exports = router;