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
    'model:service',
    'model:event'
  ]
});

// --- Basic ---
test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

// --- Relationships ---
test('it has vendor relationship', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('vendor');

  assert.equal(relationship.key, 'vendor', 'exists');
  assert.equal(relationship.kind, 'belongsTo', 'is type belongsTo');
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
