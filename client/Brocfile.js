/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  babel: {
    optional: [
      'es7.asyncFunctions',
      'es7.decorators'
   ]
  }
});

app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');

app.import('vendor/marker-clusterer/markerclusterer.min.js');

app.import('vendor/bootstrap-fileinput/fileinput.js');
app.import('bower_components/bootstrap-fileinput/css/fileinput.min.css');
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
});

app.import('bower_components/wookmark-jquery/jquery.wookmark.min.js');
app.import('bower_components/wookmark-jquery/libs/jquery.imagesloaded.js');

app.import('bower_components/geoPosition/js/geoPosition.js');


// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
