import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({
  page: 1,

  // pageSize is a default which can be overriden from the extender class
  pageSize: 10,

  // listToPaginate is sent from the extender class to allow reusability of this code
  atEnd: computed('listToPaginate.legth', 'page', function () {
    return this.get('page') * this.get('pageSize') >= this.get('listToPaginate.length');
  }),

  // this is useful for cases when there is a 'final page' requirement
  beyondEnd: computed('numPages', 'page', function () {
    return this.get('page') > this.get('numPages');
  }),

  atStart: computed('page', function () {
    return this.get('page') === 1;
  }),

  numPages: computed('pageSize', function ()  {
    let pageSize = this.get('pageSize'),
      l = this.get('listToPaginate.length');
    return Math.ceil(l / pageSize);
  }),

  pagedSlice: computed('page', 'pageSize', function () {
    let page = this.get('page') - 1;
    let pageSize = this.get('pageSize'),
      start = page * pageSize,
      end = start + pageSize;
    return this.get('listToPaginate').slice(start, end);
  }),

  actions: {
    next() {
      this.incrementProperty('page');
    },
    prev() {
      this.decrementProperty('page');
    }
  }
});
