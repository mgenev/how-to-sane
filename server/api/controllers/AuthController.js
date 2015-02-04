var passport = require('passport');
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var secret = 'RS#$09qu43f09qfj94qf*&H#(R';
var refreshSecret = 'rw5&&$$2224124f*&H#(R';

/**
 * AuthController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    login: function(req, res) {

        if (req.body.grant_type === 'password') {

            passport.authenticate('local', {
                session: false
            }, function(err, user, info) {
                if ((err) || (!user)) {
                    res.badRequest({
                        error: 'invalidPassword'
                    });
                    return;
                } else {
                    if (err) {
                        res.badRequest({
                            error: 'unknownError: ' + err
                        });
                    } else {
                        issueTokens(user, res);
                    }
                }
            })(req, res);

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
    },

    logout: function(req, res) {
        req.logout();
        res.send({
            success: true,
            message: 'logoutSuccessful'
        });
    }
};

function issueTokens(user, res) {
    var expirationTimeInMinutes = 60 * 2;

    var token = jwt.sign(user, secret, {
        expiresInMinutes: expirationTimeInMinutes
    });

    var refreshToken = jwt.sign(user, refreshSecret, {
        expiresInMinutes: expirationTimeInMinutes
    });

    res.send({
        user: user,
        access_token: token,
        expires_in: expirationTimeInMinutes * 60, // because simple auth expects seconds
        refresh_token: refreshToken
    });
}
