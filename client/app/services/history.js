import Ember from 'ember';

export default Ember.Service.extend({
  max: 20,
  log: [],

  /* TODO
   add cursor which keeps track of where you are in the log
   need to start managing whether

   i'm navigating as driven by the history manager or driven by the user to keep
   the queue and cursor straight,

   if route changes because of back or forth buttons, just move cursor, do not
   populate history log, try 'replace' for this

   need to preserve param for param dependent routes
   use transition.params, but the problem is, it takes a model, not id to transition
   http://stackoverflow.com/questions/16627026/ember-transition-to-route-passing-the-id-instead-of-obj

   so i need to store the models as well in history


   but what happens at routes like /authors/214123/books/123124312 ?
   how to even use links or transitions to routes with 2 models??
   
   lastly, evaluate whether you are at the end of the cursor or the beginning
   if end = grey out and deactivate forward button
   if beginning = grey out and deactivate back button
  */


  enforceMaxLength: Ember.observer('log.[]', function () {
    let log = this.get('log');
    if ( log.length > this.get('max')) {
        log.shift();
    }
  }),
  currentRoute: Ember.computed('log.[]', function () {
    let log = this.get('log');
    return log[log.length-1];
  }),
  previousRoute: Ember.computed('log.[]', function () {
    let log = this.get('log');
    return log[log.length-2];
  }),
  nextRoute: Ember.computed('log.[]', function () {
    console.log('next path');
    // let log = this.get('log');
    // return log[log.length-2];
  }),
  back() {

  },
  forward() {

  },
  go(index) {

  }

});
