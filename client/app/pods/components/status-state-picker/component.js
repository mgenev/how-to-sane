import Ember from 'ember';
import FocusForKeypress from 'client/mixins/focus-for-keypress';

export default Ember.Component.extend( FocusForKeypress, {
	action: 'submitAction',
	click(e) {
		$('.selected').removeClass('selected');
		$(e.target).addClass('selected');
	},
	keyDown(e) {
        if (e.keyCode === 13) {
            this.sendAction('action', this.get('status'));
        }
    },
	actions: {
		pickState (state) {
			this.status.set('state', state);
		}
	},
	removeOutline: Ember.on('didInsertElement', function() {
        this.$().css('outline-style', 'none');
    })
});
