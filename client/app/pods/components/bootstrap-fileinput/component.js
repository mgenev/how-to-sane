import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function () {
		$("#input-id").fileinput({
			uploadUrl: "/api/v1/uploads/upload",
			multiple: true
		});
	}
});
