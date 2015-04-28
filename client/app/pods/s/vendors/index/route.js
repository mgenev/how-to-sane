import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {

    let userId = this.session.get('user.id');

    let near = {
      fieldName: 'location',
      coordinates: [-122.36158340000003, 47.620633700000006],
      maxDistance: 6000
    };

    return this.store.find('vendor', {
      user: userId,
      near: near
    });
  }
});
