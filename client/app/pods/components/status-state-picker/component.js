import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		pickState: function (state) {
			this.model.set('state', state);
		}
	}
});
