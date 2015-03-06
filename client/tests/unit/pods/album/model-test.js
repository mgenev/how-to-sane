import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';


moduleForModel('album', 'Album', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:vendor',
    'model:photo',
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

test('photo relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('photos');

  assert.equal(relationship.key, 'photos');
  assert.equal(relationship.kind, 'hasMany');
});
