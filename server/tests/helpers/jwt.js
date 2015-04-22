var jwt = require('jsonwebtoken');
var secret = 'RS#$09qu43f09qfj94qf*&H#(R';

module.exports = function (user) {
    var expirationTimeInMinutes = 60 * 2;

    var token = jwt.sign(user, secret, {
        expiresInMinutes: expirationTimeInMinutes
    });

    return token;
};
