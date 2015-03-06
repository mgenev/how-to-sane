import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';


moduleForModel('vendor', 'Vendor', {
  // Specify the other units that are required for this test.
  needs: [
    'model:album',
    'model:user',
    'model:homepage',
    'model:template',
    'model:service',
    'model:status',
    'model:photo',
    'model:post'
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

test('homepage relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('homepages');

  assert.equal(relationship.key, 'homepages');
  assert.equal(relationship.kind, 'hasMany');
});

test('template relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('templates');

  assert.equal(relationship.key, 'templates');
  assert.equal(relationship.kind, 'hasMany');
});

test('service relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('services');

  assert.equal(relationship.key, 'services');
  assert.equal(relationship.kind, 'hasMany');
});
