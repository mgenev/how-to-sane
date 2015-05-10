import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Mixin.create({
  page: 1,
  // pageSize is a default which can be overriden from the extender class
  pageSize: 10,
  // listToPaginate is sent from the extender class to allow reusability of this code
  @computed('listToPaginate.length', 'page', 'pageSize')
  atEnd(l, p, ps) {
    return p * ps >= l;
  },
  // this is useful for cases when there is a 'final page' requirement
  @computed('numPages', 'page')
  beyondEnd(n, p) {
    return p > n;
  },
  @computed('page')
  atStart(p) {
    return p === 1;
  },
  @computed('pageSize', 'listToPaginate.length')
  numPages(ps, l) {
    return Math.ceil(l / ps);
  },
  @computed('page', 'pageSize', 'listToPaginate')
  pagedSlice(page, ps, l) {
    let p = page - 1;
    let start = p * ps,
      end = start + ps;
    return l.slice(start, end);
  },

  actions: {
    next() {
        this.incrementProperty('page');
      },
      prev() {
        this.decrementProperty('page');
      }
  }
});
