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
    'model:post',
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

test('it has homepage relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('homepages');

  assert.equal(relationship.key, 'homepages', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});

test('it has template relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('templates');

  assert.equal(relationship.key, 'templates', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});

test('it has service relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('services');

  assert.equal(relationship.key, 'services', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});

test('it has event relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('events');

  assert.equal(relationship.key, 'events', 'exists');
  assert.equal(relationship.kind, 'hasMany', 'is type hasMany');
});

// --- Computed Properties ---
test('it computes slug', function(assert) {
  var model;
  var _this = this;
  Ember.run(function() {
    model = _this.subject({name: 'This IS !url-safe'});
    assert.equal(model.get('slug'), 'this-is-url-safe', 'creates a slug');
    assert.equal(model.get('urlSegment'), 'this-is-url-safe', 'sets urlSegment');
  });
});
