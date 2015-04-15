import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('page');
  },

  actions: {
    update(model) {
      return model.save().then(
        savedModel => {
          console.log('page ' + savedModel.get('name') + ' saved successfully');
          this.transitionTo('s.page-manager');
        },
        reason => {
          console.log('error saving page, reason: ' + reason);
          this.transitionTo('s.page-manager');
        }
      );
    }
  }
});
