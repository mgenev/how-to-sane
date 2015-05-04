import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    clearDate() {
      this.set('fromDate', null);
    },
    close() {
      this.set('showTopPanel', false);
    }
  }
});
