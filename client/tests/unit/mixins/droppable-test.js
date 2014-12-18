import Ember from 'ember';
import DroppableMixin from 'client/mixins/droppable';

module('DroppableMixin');

// Replace this with your real tests.
test('it works', function() {
  var DroppableObject = Ember.Object.extend(DroppableMixin);
  var subject = DroppableObject.create();
  ok(subject);
});
