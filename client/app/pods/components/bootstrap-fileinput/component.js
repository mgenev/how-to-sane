import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function () {
		$("#input-id").fileinput({
			uploadUrl: this.get('url'),
			multiple: true
		});
	}
});
