import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('vendor');
    },
    actions: {
        createVendor: function(model) {
            var userId = this.session.get('user.id');

            var user = this.store.find('user', userId).then(function(result) {
                model.set('user', result);
                user = result;
                return model.save();
            }).then(() => this.transitionTo('s.users.user', user));
        }
    }
});