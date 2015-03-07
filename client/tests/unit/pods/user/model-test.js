import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';


moduleForModel('user', 'User', {
  // Specify the other units that are required for this test.
  needs: [
    'model:post',
    'model:vendor',
    'model:photo',
    'model:album',
    'model:post',
    'model:status',
    'model:homepage',
    'model:template',
    'model:service'
  ]
});

// --- Basics ---
test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

// --- Relationships ---
test('it has status relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('statuses');

  assert.equal(relationship.key, 'statuses', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});

test('it has album relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('albums');

  assert.equal(relationship.key, 'albums', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});

test('it has photo relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('photos');

  assert.equal(relationship.key, 'photos', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});

test('it has vendor relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('vendors');

  assert.equal(relationship.key, 'vendors', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});

test('it has post relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('posts');

  assert.equal(relationship.key, 'posts', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});
