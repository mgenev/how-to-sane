import Ember from 'ember';

/*
/ Module Name:
/ app/pods/users/user/route
*/

export default Ember.Route.extend({
	model(params) {
		return this.store.find('user', params.user_id);
    }
});
