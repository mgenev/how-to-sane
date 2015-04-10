import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('page');
  },

  actions: {
    update: function(model) {
      var self = this;
      //var userId = this.session.get('user.id');
      model.save().then(
        function(savedModel) {
          console.log('page ' + savedModel.get('name') + ' saved successfully');
          this.transitionTo('s.page-manager');
        },
        function(reason) {
          console.log('error saving page, reason: ' + reason);
          this.transitionTo('s.page-manager');
        }
      );

    }
  }
});
