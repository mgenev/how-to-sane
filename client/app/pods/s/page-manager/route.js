import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    cancel() {
      this.transitionTo('s.page-manager');
    },
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
    },
    delete(model) {
      return model.destroyRecord().then(
          () => this.transitionTo('s.page-manager'),
          reason => {
            console.log('error deleting page, reason was: ' + reason);
            this.transitionTo('s.page-manager');
          }
      );
    }
  }
});
