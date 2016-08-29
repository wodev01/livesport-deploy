'use strict';

var user = require('../controllers/user.ctrl');

module.exports = function (app) {
    app.route('/users')
        .get(user.getUsers);
};
