import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.store.createRecord('status');
	},
	actions: {
		postStatus: function (model) {
			model.save().then(() => this.transitionTo('s.feed'));
		}
	}
});
