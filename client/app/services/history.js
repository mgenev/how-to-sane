import Ember from 'ember';

const { observer, computed } = Ember;

export default Ember.Service.extend({
  max: 20,
  cursor: 0,
  log: [],
  // TODO: this observer is dubious
  enforceMaxLength: observer('log.length', 'max', function () {
    let log = this.get('log');
    if ( log.length > this.get('max')) {
        log.shift();
    }
  }),
  currentRoute: computed('log.[]', function () {
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
    this.container.lookup('router:main').router.replaceWith(this.get('log')[index-1]);
  },
  cursorAtEnd: computed('log.length', 'cursor', function () {
    return this.get('log').length === this.get('cursor');
  }),
  cursorAtStart: computed('log.[]', 'cursor', function () {
    return this.get('cursor') === 1;
  })

});
