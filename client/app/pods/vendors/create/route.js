import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('vendor');
    },
    actions: {
        createVendor: function(model) {
        	var user = this.store.find('user', '546181abc4d5e55e87b8af38').then(function(result) {
                model.set('user', result);
                user = result;
                return model.save();
            }).then(() => this.transitionTo('users.user', user));
        }
    }
});
