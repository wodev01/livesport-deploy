#!/usr/bin/env node
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};

// Set static files
app.use(express.static('app'));
app.use(express.static('.tmp'));
app.use('/bower_components', express.static(path.dirname(__dirname) + '/bower_components'));
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(allowCrossDomain);

// Set routes
require('./routes/user.route')(app);
require('./routes/stripe.route')(app);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening at http://localhost:' + server.address().port);
});
