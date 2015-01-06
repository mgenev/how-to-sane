import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
    	var userId = this.container.lookup('simple-auth-session:main').get('user')[0].id;

        return this.store.find('vendor', {user: userId});
    }
});
