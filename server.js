//jshint esversion:6
const express = require('express');
const app = express();
const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');

app.set('port', process.env.PORT || 8080);

//endpoints to be handled by htmlRoutes.js
app.use('/', htmlRouter);
app.use('/home', htmlRouter);
app.use('/survey', htmlRouter);

//endpoints to be handled by apiRoutes.js
app.use('/', apiRouter);
app.use('/api/friends', apiRouter);

app.listen(app.get('port'), function () {
  console.log('Server running on %s', app.get('port'));
});