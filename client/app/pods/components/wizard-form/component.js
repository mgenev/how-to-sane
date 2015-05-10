import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  activeStep: 0,

  @computed('activeStep', 'steps')
  type(a, s) {
    return s[a].component;
  },

  @computed('activeStep')
  firstStep(a) {
    return a === 0;
  },

  @computed('activeStep', 'steps')
  lastStep(a, s) {
    return a === s.length - 1;
  },

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
