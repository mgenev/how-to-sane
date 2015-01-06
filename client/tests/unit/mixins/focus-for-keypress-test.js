import Ember from 'ember';
import FocusForKeypressMixin from 'client/mixins/focus-for-keypress';

module('FocusForKeypressMixin');

// Replace this with your real tests.
test('it works', function() {
  var FocusForKeypressObject = Ember.Object.extend(FocusForKeypressMixin);
  var subject = FocusForKeypressObject.create();
  ok(subject);
});
