var expressJwt = require('express-jwt');
var secret = 'RS#$09qu43f09qfj94qf*&H#(R';

module.exports = expressJwt({secret: secret});