var stripeServ = require('../services/stripe.serv.js');

// create new stripe customer
exports.charge = function (req, res) {
    var chargeObj = {
        "amount" : req.body.amount, // Amount in cents
        "currency": 'usd',
        "source": req.body.stripeToken,
        "description": req.body.description
    };

    stripeServ.stripeCharge(chargeObj)
        .then(function (charge) {
            res.json(charge);
        }, function (err) {
            res.status(err.raw.statusCode).send(err);
        });
};

// create new stripe customer
exports.createCustomer = function (req, res) {
    var customerObj = {
        "source": req.body.stripeToken,
        "plan": req.body.plan,
        "email": req.body.email
    };

    stripeServ.createStripeCustomer(customerObj)
        .then(function (customer) {
            res.json(customer);
        }, function (err) {
            res.status(err.raw.statusCode).send(err);
        });
};

//create new stripe subscriptions for existing customer
exports.createSubscriptions = function (req, res) {
    var subscriptionsObj = {
        "customer": req.body.customerId,
        "plan": req.body.plan
    };

    stripeServ.createStripeSubscriptions(subscriptionsObj)
        .then(function (subscriptions) {
            res.json(subscriptions);
        }, function (err) {
            res.status(err.raw.statusCode).send(err);
        });
};

//Delete stripe subscriptions
exports.deleteSubscriptions = function (req, res) {
    console.log(req.params);
    var subscriptionsId = req.params.id;

    stripeServ.deleteStripeSubscriptions(subscriptionsId)
        .then(function (subscriptions) {
            console.log('subscriptions', subscriptions);
            res.json(subscriptions);
        }, function (err) {
            res.status(err.raw.statusCode).send(err);
        });
};

