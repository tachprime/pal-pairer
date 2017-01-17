//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var htmlRouter = require('./app/routing/htmlRoutes');
var apiRouter = require('./app/routing/apiRoutes');

app.set('port', process.env.PORT || 8080);

//endpoints to be handled by htmlRoutes.js
app.use('/', htmlRouter);
app.use('/home', htmlRouter);
app.use('/survey', htmlRouter);

//endpoints to be handels by apiRoutes.js
app.use('/', apiRouter);
app.use('/api/friends', apiRouter);

app.listen(app.get('port'), function () {
  console.log('Server running on %s', app.get('port'));
});