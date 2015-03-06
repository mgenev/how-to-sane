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
