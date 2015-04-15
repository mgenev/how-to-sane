var jwt = require('jsonwebtoken');
var _ = require('lodash');
var secret = 'RS#$09qu43f09qfj94qf*&H#(R';
var refreshSecret = 'rw5&&$$2224124f*&H#(R';
var bcrypt = require('bcrypt');

/**
 * AuthController
 */

module.exports = {
    login: function(req, res) {

        if (req.body.grant_type === 'password') {
          console.log('REQ BODY', req.body.username);
            User.findByEmail(req.body.username).exec(function(err, user) {
                if (err) {
                    return res.badRequest({
                        error: err
                    });
                }
                if (!user || user.length < 1) {
                    return res.badRequest({
                        error: 'No such user'
                    });
                }

                bcrypt.compare(req.body.password, user[0].password, function(err, result) {

                    if (err || !result) {
                        return res.badRequest({
                            error: 'invalidPassword'
                        });
                    } else {
                        issueTokens(user, res);
                    }
                });
            });

        } else if (req.body.grant_type === 'refresh_token' && req.body.refresh_token) {

            var token, user;

            if (req.headers && req.headers.authorization) {
                var parts = req.headers.authorization.split(' ');
                if (parts.length == 2) {
                    var scheme = parts[0],
                        credentials = parts[1];

                    if (/^Bearer$/i.test(scheme)) {
                        token = credentials;
                    }
                } else {

                }
            }
            var bearerToken, refreshToken;

            bearerToken = jwt.verify(token, secret);
            refreshToken = jwt.verify(req.body.refresh_token, refreshSecret);

            if (_.isEqual(bearerToken, refreshToken)) {
                delete bearerToken.exp;
                delete bearerToken.iat;

                user = bearerToken;
                issueTokens(user, res);
            };
        }
    }
};

function issueTokens(user, res) {
    var expirationTimeInMinutes = 60 * 2;

    var token = jwt.sign(user[0], secret, {
        expiresInMinutes: expirationTimeInMinutes
    });

    var refreshToken = jwt.sign(user[0], refreshSecret, {
        expiresInMinutes: expirationTimeInMinutes
    });

    res.send({
        user: user[0],
        access_token: token,
        expires_in: expirationTimeInMinutes * 60, // because simple auth expects seconds
        refresh_token: refreshToken
    });
}
