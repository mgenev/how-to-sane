import Ember from 'ember';

const { on } = Ember;

export default Ember.Component.extend({
	focusForSubmit: on('didInsertElement', function () {
		this.$().attr('tabindex', 0);
		this.$('input').focus();
	})
});
