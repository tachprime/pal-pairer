//jshint esversion:6
const express = require('express');
const app = express();
const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');

app.set('port', process.env.PORT || 8080);

//endpoints to be handled by htmlRoutes.js
app.use('/', htmlRouter);
//endpoints to be handled by apiRoutes.js
app.use('/', apiRouter);

app.listen(app.get('port'), function () {
  console.log('Server running on %s', app.get('port'));
});