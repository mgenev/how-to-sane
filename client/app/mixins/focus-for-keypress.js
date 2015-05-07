import Ember from 'ember';

const { on } = Ember;

export default Ember.Mixin.create({
    focusForKeypress: on('didInsertElement', function() {
        //fix for catching key events
        this.$().attr('tabindex', 0);
        this.$().focus();
    })
});
