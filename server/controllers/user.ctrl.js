/*
 * GET users listing.
 */
exports.getUsers = function (req, res) {
    var response = {"data": [{email: 'wo.dev01@gmail.com', passowrd: '123456'}]};
    res.json(response);
};
