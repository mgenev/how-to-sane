import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('page');
  },

  actions: {
    update: function(model) {
      var self = this;
      return model.save().then(
        function(savedModel) {
          console.log('page ' + savedModel.get('name') + ' saved successfully');
          self.transitionTo('s.page-manager');
        },
        function(reason) {
          console.log('error saving page, reason: ' + reason);
          self.transitionTo('s.page-manager');
        }
      );

    }
  }
});
