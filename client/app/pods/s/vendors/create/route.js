import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('vendor');
    },

    actions: {
        createVendor: function(model) {
            var _this = this;
            var userId = this.session.get('user.id');

            var user = this.store.find('user', userId).then(function(result) {
                model.set('user', result);
                user = result;
                return _this.geoService.getLatLongForAddress(model.get('address'));
            }).then(function (response) {
                var latlong = response.results[0].geometry.location;
                model.set('location', latlong);
                return model.save();
            }).then(() => this.transitionTo('s.users.user', user));
        }
    }
});
