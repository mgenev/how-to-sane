import Ember from 'ember';

const { computed } = Ember;


export default Ember.Component.extend({
  activeStep: 0,

  type: computed('activeStep', 'steps', function () {
    var activeStep = this.get('activeStep');
    var steps = this.get('steps');
    return steps[activeStep].component;
  }),

  firstStep: computed('activeStep', function () {
    return this.get('activeStep') === 0;
  }),

  lastStep: computed('activeStep', 'steps', function () {
    var activeStep = this.get('activeStep');
    var steps = this.get('steps');
    return activeStep === steps.length - 1;
  }),

  addActiveClass() {
    $('.wizard-active').removeClass('wizard-active');

    let selector = '.wizard-step:eq(' + this.get('activeStep') + ')';
    $(selector).addClass('wizard-active');
  },

  didInsertElement() {
    this._super(...arguments);
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
        this.sendAction('postStatus', this.get('status'));
      } else {
        this.triggerAction({
          action: 'nextStep',
          target: this
        });
      }
    }
  }
});
