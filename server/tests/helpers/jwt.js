var jwt = require('jsonwebtoken');
var _ = require('lodash');
var secret = 'RS#$09qu43f09qfj94qf*&H#(R';
var refreshSecret = 'rw5&&$$2224124f*&H#(R';
var bcrypt = require('bcrypt');

module.exports = function (user) {
    var expirationTimeInMinutes = 60 * 2;

    var token = jwt.sign(user, secret, {
        expiresInMinutes: expirationTimeInMinutes
    });

    return token;
};
