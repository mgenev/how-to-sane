import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('page', {sort: 'order asc'});
  }
});
