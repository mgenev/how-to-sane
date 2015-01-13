import Ember from 'ember';

export default Ember.Component.extend({
	focusForSubmit: function() { 
        this.$().attr('tabindex', 0);
        this.$('input').focus();
    }.on('didInsertElement')
});
