#!/usr/bin/env node
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

// Set routes
require('./routes/user.route')(app);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening at http://localhost:' + server.address().port);
});
