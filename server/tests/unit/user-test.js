var User = require('../../api/models/User');
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

    it('should not allow duplicate emails');

    it('should require a username', function(done) {
      sails.request({
        url: '/api/v1/users',
        method: 'POST',
        params: {
          user: {
            username: '',
            password: 'password'
          }
        },
        headers: {},
      }, function(err, clientRes, body) {
        expect(err).to.exist;
        expect(err).to.be.instanceof(Error);
        expect(err).to.have.property('status', 400);
        expect(err).to.have.deep.property('body.error', 'E_VALIDATION');
        expect(err).to.have.deep.property('body.invalidAttributes.username');
        done();
      });
    });

    it('should require a password', function(done) {
      sails.request({
        url: '/api/v1/users',
        method: 'POST',
        params: {
          user: {
            username: 'test@test.com',
            password: ''
          }
        },
        headers: {}
      }, function(err, clientRes, body) {
        expect(err).to.exist;
        expect(err).to.be.instanceof(Error);
        expect(err).to.have.property('status', 400);
        expect(err).to.have.deep.property('body.error', 'E_VALIDATION');
        expect(err).to.have.deep.property('body.invalidAttributes.password');
        done();
      });
    });

  });

  describe('when the json form of the user is requested', function() {
    it('sound return valid json representation');
    it('should not include the password');
  });

  describe('after a user is created', function() {
    it('should log the user in');
  })

  describe('when a user password is changed', function() {
    it('should hash the password');
    it('should keep the user logged in');
  })

});
