import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('homepage', 'Homepage', {
  // Specify the other units that are required for this test.
  needs: [
    'model:vendor',
    'model:user',
    'model:template',
    'model:service'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

test('vendor relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('vendor');

  assert.equal(relationship.key, 'vendor');
  assert.equal(relationship.kind, 'belongsTo');
});
