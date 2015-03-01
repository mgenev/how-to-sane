var User = require('../../../api/models/User.js');
var Sails = require('sails').Sails;
var sinon = require('sinon');
var expect = require('chai').expect;


describe('Users', function() {

  before(function beforeRunningAnyTests(done) {
    // Load the app without lifting sails
    new Sails().load({
      log: {
        level: 'warn'
      },
      hooks: {
        grunt: false
      }
    }, function whenAppIsReady(err, sailsApp) {
      done(err, sailsApp);
    });
  });

  after(function afterAllTestsFinish(done) {
    sails.lower(done);
  });

  describe('before a user is created', function() {
    // Wrap method in a spy
    before(function(done) {
      sinon.spy(User, "beforeCreate");
      done();
    });

    // Remove spy from method
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
