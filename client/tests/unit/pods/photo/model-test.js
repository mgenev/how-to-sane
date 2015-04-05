import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';


moduleForModel('photo', 'Photo', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:album',
    'model:vendor',
    'model:post',
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

test('it has album relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('album');

  assert.equal(relationship.key, 'album', 'exists');
  assert.equal(relationship.kind, 'belongsTo', 'is type belongsTo');
});
