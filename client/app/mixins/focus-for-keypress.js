import Ember from 'ember';

export default Ember.Mixin.create({
	focusForKeypress: function() { 
        //fix for catching key events
        this.$().attr('tabindex', 0);
        this.$().focus();
    }.on('didInsertElement')
});
