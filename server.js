var express = require("express"),
    path     = require('path'),
    app = express(),
    expressValidator = require('express-validator'),
    bodyParser = require("body-parser"),
    router = express.Router();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));
app.use(expressValidator());
app.use(allowCrossDomain);

require('./server/routes/user.route')(app);
require('./server/routes/stripe.route')(app);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'));