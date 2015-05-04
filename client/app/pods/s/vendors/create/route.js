/* jshint ignore:start */
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('vendor');
  },

  actions: {
    createVendor: async function(model) {
      try {
        let user = await this.store.find('user', this.session.get('user.id'));
        let latLong = await this.geoGoogleService.getLatLongForAddress(model.get('address'))
        model.set('location', latLong);
        model.set('user', user);
        await model.save();
        this.transitionTo('s.users.user', user);
      }
      catch (err) {
        Ember.get(this, 'flashMessages').error(err);
      }
    }
  }
});
/* jshint ignore:end */
