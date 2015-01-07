var passport = require('passport');
var jwt = require('jsonwebtoken');
var secret = 'RS#$09qu43f09qfj94qf*&H#(R';
/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
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
        passport.authenticate('local', {session: false}, function(err, user, info) {
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
                    var token = jwt.sign(user, secret, { expiresInMinutes: 60*24 });
                    res.send({
                        user: user,
                        access_token: token
                    });
                }
            }
        })(req, res);
    },

    logout: function(req, res) {
        req.logout();
        res.send({
            success: true,
            message: 'logoutSuccessful'
        });
    }
};