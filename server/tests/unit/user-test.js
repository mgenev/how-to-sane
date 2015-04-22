var User = require('../../api/models/User');
var Sails = require('sails').Sails;
var sinon = require('sinon');
var expect = require('chai').expect;
var path = require('path');
var user = require('../fixtures/user')[0];
var token = require('../helpers/jwt');
var loadConfig = require('../helpers/loadConfig');


describe('Users', function() {

  before(function beforeRunningAnyTests(done) {
    // Load the app without lifting sails
    new Sails().load(loadConfig, function whenAppIsReady(error, sailsApp) {
      if (error) {
        done(error, sailsApp);
      }

      // Require barrels and load fixtures
      var Barrels = require('barrels');
      var barrels = new Barrels(path.join(process.cwd(), 'tests', 'fixtures'));

      // Populate the DB
      barrels.populate(function (error) {
        done(error, sailsApp);
      });

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
            email: '',
            password: 'password'
          }
        },
        headers: {},
      }, function(err, clientRes, body) {
        expect(err).to.exist;
        expect(err).to.be.instanceof(Error);
        expect(err).to.have.property('status', 400);
        expect(err).to.have.deep.property('body.error', 'E_VALIDATION');
        expect(err).to.have.deep.property('body.invalidAttributes.email');
        done();
      });
    });

    it('should require a password', function(done) {
      sails.request({
        url: '/api/v1/users',
        method: 'POST',
        params: {
          user: {
            email: 'test@test.com',
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
    it('should return valid json representation', function(done) {
      sails.request({
        url: '/api/v1/users',
        method: 'GET',
        params: {},
        headers: {'Authorization' : 'Bearer ' + token(user)}
      }, function(err, clientRes, body) {
        expect(err).not.to.exist;
        expect(clientRes.statusCode).to.equal(200);
        expect(body).to.include.keys('posts', 'vendors', 'photos', 'albums', 'statuses', 'events');
        done();
      });
    });

    it('should match the created users', function(done) {
      sails.request({
        url: '/api/v1/users',
        method: 'GET',
        params: {'sort': 'id asc'},
        headers: {'Authorization' : 'Bearer ' + token(user)}
      }, function(err, clientRes, body) {

        expect(body).to.have.deep.property('users[0].id');
        expect(body).to.have.deep.property('users[0].createdAt');
        expect(body.users[0].firstName).to.equal('Peter');
        expect(body.users[0].lastName).to.equal('Test');
        expect(body.users[0].email).to.equal('peter@test.com');
        expect(body.users[0].password).to.not.equal('super-secure');
        expect(body.users[1].firstName).to.equal('First');
        expect(body.users[2].email).to.equal('john.original@email.com');
        done();
      });
    });
    it('should not include the password', function(done) {
      sails.request({
        url: '/api/v1/users',
        method: 'GET',
        params: {'sort': 'id asc'},
        headers: {'Authorization' : 'Bearer ' + token(user)}
      }, function(err, clientRes, body) {

        expect(body).to.not.have.deep.property('users[0].password');
        expect(body).to.not.have.deep.property('users[1].password');
        expect(body).to.not.have.deep.property('users[2].password');

        done();
      });
    });
  });

  describe('when a user password is changed', function() {
    it('should hash the password');
  });

});
