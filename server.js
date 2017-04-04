//jshint esversion:6
const express = require('express');
const app = express();
const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/app/public'));

//endpoints to be handled by apiRoutes.js
app.use('/', apiRouter);
//endpoints to be handled by htmlRoutes.js
app.use('/', htmlRouter);

app.listen(app.get('port'), function() {
    console.log('Server running on %s', app.get('port'));
});