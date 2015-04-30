import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    fromDate: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.find('status', {
      sort: 'createdAt desc',
      createdAt: {
        ">": params.fromDate
      }
    });
  }
});
