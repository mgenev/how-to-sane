/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
      modulePrefix: 'client',
      podModulePrefix: 'client/pods',
      environment: environment,
      baseURL: '/',
      locationType: 'auto',
      EmberENV: {
          FEATURES: {

          }
      },

      APP: {
          // Here you can pass flags/options to your application instance
          // when it is created
      }
  };

  ENV.contentSecurityPolicy =  {
          'default-src': "'self' https://maps.googleapis.com",
          'font-src': "*",
          'connect-src': "'self' https://maps.googleapis.com",
          'img-src': "*",
          'style-src': "* 'unsafe-inline'",
          'frame-src': "*",
          'script-src': "'self' 'unsafe-eval' *.googleapis.com *.gstatic.com"
  };

  ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:oauth2-bearer'
  };
  ENV['simple-auth-oauth2'] = {
      refreshAccessTokens: true,
      serverTokenEndpoint: '/api/v1/auths/login'
  };


  if (environment === 'development') {
      // ENV.APP.LOG_RESOLVER = true;
      ENV.APP.LOG_ACTIVE_GENERATION = true;
      // ENV.APP.LOG_TRANSITIONS = true;
      // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
      ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
      // Testem prefers this...
      ENV.baseURL = '/';
      ENV.locationType = 'auto';

      // keep test console output quieter
      ENV.APP.LOG_ACTIVE_GENERATION = false;
      ENV.APP.LOG_VIEW_LOOKUPS = false;

      ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
