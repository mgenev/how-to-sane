import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('page', {sort: 'order asc'});
  },
  actions: {
    cancel: function() {
      this.transitionTo('s.page-manager');
    },
    update: function (model) {
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
    },
    delete: function(model) {
      var self = this;
      return model.destroyRecord().then(
        function() {
          self.transitionTo('s.page-manager');
        },
        function(reason) {
          console.log('error deleting page, reason was: ' + reason);
          self.transitionTo('s.page-manager');
        }
      );
    }
  }
});
