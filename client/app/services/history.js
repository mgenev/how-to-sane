import Ember from 'ember';

export default Ember.Service.extend({
  max: 20,
  cursor: 0,
  log: [],
  enforceMaxLength: Ember.observer('log.[]', function () {
    let log = this.get('log');
    if ( log.length > this.get('max')) {
        log.shift();
    }
  }),
  currentRoute: Ember.computed('log.[]', function () {
    return this.get('log')[this.get('cursor')-1];
  }),
  back() {
    if (!this.get('cursorAtStart')) {
      this.decrementProperty('cursor');
      this.container.lookup('router:main').router.replaceWith(this.get('log')[this.get('cursor')-1]);
    }
  },
  forward() {
    if (!this.get('cursorAtEnd')) {
      this.incrementProperty('cursor');
      this.container.lookup('router:main').router.replaceWith(this.get('log')[this.get('cursor')-1]);
    }
  },
  go(index) {
    this.container.lookup('router:main').router.replaceWith(log[index-1]);
  },
  cursorAtEnd: Ember.computed('log.[]', 'cursor', function () {
    return this.get('log').length === this.get('cursor');
  }),
  cursorAtStart: Ember.computed('log.[]', 'cursor', function () {
    return this.get('cursor') === 1;
  })

  /* TODO
  lastly, evaluate whether you are at the end of the cursor or the beginning
  if end = grey out and deactivate forward button
  if beginning = grey out and deactivate back button

  cursor starts at array.length index and gets reduced by back button actions
  when back and forward happen, the route is replaced and therefore not recorded
  in history.
  */

});
