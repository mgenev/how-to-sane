import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('user');
    },
    actions: {
        createUser: function(model) {
            model.save().then(user => this.transitionTo('users.user', user));
        }
    }
});
