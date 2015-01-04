import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.createRecord('vendor');
    },
    actions: {
        createVendor: function(model) {

            var userId= this.container.lookup('simple-auth-session:main').get('user')[0].id;

            var user = this.store.find('user', userId).then(function(result) {
                model.set('user', result);
                user = result;
                return model.save();
            }).then(() => this.transitionTo('users.user', user));
        }
    }
});