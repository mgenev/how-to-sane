import Ember from 'ember';

export default Ember.Component.extend({
  activeStep: 0,

  type: Ember.computed('activeStep', function () {
    var steps = this.get('steps');
    return steps[this.get('activeStep')].component;
  }),

  firstStep: Ember.computed('activeStep', function () {
    return (this.get('activeStep') === 0);
  }),

  lastStep: Ember.computed('activeStep', function () {
    return (this.get('activeStep') === this.get('steps').length - 1);
  }),

  addActiveClass() {
    $('.wizard-active').removeClass('wizard-active');

    let selector = '.wizard-step:eq(' + this.get('activeStep') + ')';
    $(selector).addClass('wizard-active');
  },

  didInsertElement() {
    this.addActiveClass();
  },

  actions: {
    nextStep() {
      this.incrementProperty('activeStep');
      this.addActiveClass();
    },

    prevStep() {
      this.decrementProperty('activeStep');
      this.addActiveClass();
    },

    goToStep(step) {
      this.set('activeStep', step);
      this.addActiveClass();
    },

    submitAction() {
      if (this.get('lastStep')) {
        this.sendAction('action', this.get('status'));
      } else {
        this.triggerAction({
          action: 'nextStep',
          target: this
        });
      }
    }
  }
});
