import Ember from 'ember';

export default Ember.Component.extend({
    // todo make the active class be appended to the active step li somehow
    activeStep: 0,
    type: function () {
    	return this.get('steps')[this.get('activeStep')].component;
    }.property('activeStep'),
    actions: {
        nextStep: function() {
            this.incrementProperty('activeStep');
            this.addActiveClass();
        }
    },
    addActiveClass: function() {
        $('.wizard-active').removeClass('wizard-active');

        var selector = '.wizard-step:eq(' + this.get('activeStep') + ')';
        $(selector).addClass('wizard-active');
    },
    didInsertElement: function() {
        this.addActiveClass();
    }
});
