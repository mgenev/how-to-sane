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

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

test('status relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('statuses');

  assert.equal(relationship.key, 'statuses');
  assert.equal(relationship.kind, 'hasMany');
});

test('album relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('albums');

  assert.equal(relationship.key, 'albums');
  assert.equal(relationship.kind, 'hasMany');
});

test('photo relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('photos');

  assert.equal(relationship.key, 'photos');
  assert.equal(relationship.kind, 'hasMany');
});

test('vendor relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('vendors');

  assert.equal(relationship.key, 'vendors');
  assert.equal(relationship.kind, 'hasMany');
});

test('post relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('posts');

  assert.equal(relationship.key, 'posts');
  assert.equal(relationship.kind, 'hasMany');
});
