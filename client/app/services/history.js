import Ember from 'ember';
import computed from 'ember-computed-decorators';

const { observer } = Ember;

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
  @computed('log.[]', 'cursor')
  currentRoute(log, cursor) {
    return log[cursor-1];
  },
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
  @computed('log.[]', 'cursor')
  cursorAtEnd(log, cursor) {
    return log.length === cursor;
  },
  @computed('log.[]', 'cursor')
  cursorAtStart(log, cursor) {
    return cursor === 1;
  }
});
