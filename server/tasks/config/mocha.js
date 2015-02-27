/**
 * Perform mocha tests.
 *
 * ---------------------------------------------------------------
 *
 * Run all tests in tests folder.
 *
 * For usage docs see:
 *    https://github.com/pghalliday/grunt-mocha-test
 */
module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: ['tests/**/*.spec.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
};
