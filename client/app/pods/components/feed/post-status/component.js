import Ember from 'ember';

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
  createStatusModel: Ember.on('init', function () {
    this.set('status', this.get('store').createRecord('status'));
  })
});
