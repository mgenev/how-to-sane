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
    'model:status'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

test('user relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user');
  assert.equal(relationship.kind, 'belongsTo');
});

test('album relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('album');

  assert.equal(relationship.key, 'album');
  assert.equal(relationship.kind, 'belongsTo');
});
