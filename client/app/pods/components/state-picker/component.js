import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		pickState: function (state) {
			console.log('you picked ', state);
			this.status.set('state', state);
			// Send action statePicked to route which saves to model and takes ot next part of checkin
		}
	}
});
