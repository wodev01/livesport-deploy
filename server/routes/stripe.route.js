'use strict';

var stripeCtrl = require('../controllers/stripe.ctrl');

module.exports = function (app) {
    app.route('/charge')
        .post(stripeCtrl.charge);

    app.route('/customer')
        .post(stripeCtrl.createCustomer);

    app.route('/subscriptions/:id')
        .post(stripeCtrl.createSubscriptions);
    app.route('/subscriptions/:id')
        .delete(stripeCtrl.deleteSubscriptions);
};
