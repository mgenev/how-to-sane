import Ember from 'ember';
import DestroyNewModelMixin from 'client/mixins/destroy-new-model';

module('DestroyNewModelMixin');

// Replace this with your real tests.
test('it works', function() {
  var DestroyNewModelObject = Ember.Object.extend(DestroyNewModelMixin);
  var subject = DestroyNewModelObject.create();
  ok(subject);
});
