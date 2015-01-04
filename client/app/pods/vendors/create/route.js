import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('vendor');
    },
    actions: {
        createVendor: function(model) {
            // TODO think of the best way to obtain the user here
        	model.save().then(vendor => this.transitionTo('users.user', vendor.user));
        }
    }
});
