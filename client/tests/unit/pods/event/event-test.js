import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';


moduleForModel('event', {
  // Specify the other units that are required for this test.
  needs: [
    'model:vendor',
    'model:user',
    'model:homepage',
    'model:template',
    'model:service',
    'model:photo',
    'model:album',
    'model:post',
    'model:status'
  ]
});

// --- Basics ---
test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

// --- Relationships ---
test('it has vendor relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('vendor');

  assert.equal(relationship.key, 'vendor', 'exists');
  assert.equal(relationship.kind, 'belongsTo', 'is type belongsTo');
});

test('it has user relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('users');

  assert.equal(relationship.key, 'users', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});
