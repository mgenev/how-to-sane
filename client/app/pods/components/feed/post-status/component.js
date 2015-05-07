import Ember from 'ember';

const { on } = Ember;

export default Ember.Component.extend({
  store: Ember.inject.service(),
  steps: [{
      caption: 'Post your message',
      component: 'status-note'
  }, {
      caption: 'Post what you are doing',
      component: 'status-activity'
  }, {
      caption: 'Tell us how you feel',
      component: 'status-state-picker'
  }],

  createStatusModel: on('init', function () {
    this.set('status', this.get('store').createRecord('status'));
  }),
  actions: {
    postStatus() {
      this.sendAction('postStatus', this.get('status'));
    }
  }
});
