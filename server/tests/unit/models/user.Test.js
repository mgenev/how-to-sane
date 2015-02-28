var User = require('../../../api/models/User.js');
var sinon = require('sinon');
var expect = require('chai').expect;

describe('The User Model', function() {
  describe('after a user is created', function() {
    before(function(done) {
      sinon.spy(User, "beforeCreate");
      done();
    });

    after(function(done) {
      User.beforeCreate.restore();
      done();
    });

    it ('should hash the password', function(done) {
      User.beforeCreate({
        password: 'password'
      }, function(err, user) {
        expect(user.password).to.not.equal('password');
        expect(user.password).to.have.length(60);
        done();
      });
    });
  });
});
