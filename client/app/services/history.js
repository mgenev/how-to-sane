import Ember from 'ember';

export default Ember.Service.extend({
  max: 20,
  log: [],

  /* TODO
  lastly, evaluate whether you are at the end of the cursor or the beginning
  if end = grey out and deactivate forward button
  if beginning = grey out and deactivate back button

  cursor starts at array.length index and gets reduced by back button actions
  when back and forward happen, the route is replaced and therefore not recorded
  in history.
  */

  cursor: 0,

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
