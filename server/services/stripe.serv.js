var stripe = require('stripe')('sk_test_1t791F9jujclH24VvQp9hazh');

// apply charge
exports.stripeCharge = function (chargeObj) {
    return new Promise(function(resolve, reject) {
        stripe.charges.create(chargeObj,
            function (err, charge) {
                if (err) {
                    reject(err);
                }
                resolve(charge);
            });
    });
};

// create new stripe customer
exports.createStripeCustomer = function (customerObj) {
    return new Promise(function(resolve, reject) {
        stripe.customers.create(customerObj,
            function (err, customer) {
                if (err) {
                    reject(err);
                }
                resolve(customer);
            });
    });
};

//create new stripe subscriptions for existing customer
exports.createStripeSubscriptions = function (subscriptionsObj) {
    return new Promise(function(resolve, reject) {
        stripe.subscriptions.create(subscriptionsObj,
            function (err, customer) {
                if (err) {
                    reject(err);
                }
                resolve(customer);
            });
    });
};


//delete stripe subscriptions
exports.deleteStripeSubscriptions = function (subscriptionsId) {
    return new Promise(function(resolve, reject) {
        stripe.subscriptions.del(subscriptionsId,
            function (err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
    });
};
