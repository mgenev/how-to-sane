import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';


moduleForModel('post', 'Post', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:vendor',
    'model:photo',
    'model:album',
    'model:status',
    'model:event'
  ]
});

// --- Basics ---
test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

// --- Relationships ---
test('it has user relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user', 'exists');
  assert.equal(relationship.kind, 'belongsTo', 'is type belongsTo');
});
