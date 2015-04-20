var User = require('../../api/models/User');
var Sails = require('sails').Sails;
var sinon = require('sinon');
var expect = require('chai').expect;
var path = require('path');


describe('Users', function() {

  before(function beforeRunningAnyTests(done) {
    // Load the app without lifting sails
    new Sails().load({
      log: {
        level: 'warn'
      },
      models: {
        connection: 'test',
        migrate: 'drop'
      },
      eslint: {
        check: false
      },
      hooks: {
        grunt: false,
        views: false,
        cors: false,
        csrf: false,
        i18n: false,
        pubsub: false,
        session: false
      }
    }, function whenAppIsReady(error, sailsApp) {
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
        headers: {}
      }, function(err, clientRes, body) {
        expect(err).not.to.exist;
        expect(clientRes.statusCode).to.equal(200);
        console.log(body);
        expect(body).to.include.keys('posts', 'vendors', 'photos', 'albums', 'statuses', 'events');
        done();
      });
    });

    it('should match the created users', function(done) {
      sails.request({
        url: '/api/v1/users',
        method: 'GET',
        params: {},
        headers: {}
      }, function(err, clientRes, body) {
        expect(body).to.have.deep.property('people[0].id');
        expect(body).to.have.deep.property('people[0].createdAt');
        console.log(body)
        expect(body.people[0].firstName).to.equal('Peter');
        expect(body.people[0].lastName).to.equal('Test');
        expect(body.people[0].email).to.equal('peter@test.com');
        expect(body.people[0].password).to.not.equal('super-secure');
        expect(body.people[1].firstName).to.equal('First');
        expect(body.people[2].email).to.equal('john.original@email.com');
        done();
      });
    });
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
