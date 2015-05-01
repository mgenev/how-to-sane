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
  },
  actions: {
    postStatus(model) {
        var userId = this.session.get('user.id');

        this.store.find('user', userId).then(result => {
            model.set('user', result);
            return model.save();
        }).then(() => this.transitionTo('s.feed'));
    }
  }
});
