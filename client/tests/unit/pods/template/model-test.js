import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('template', 'Template', {
  // Specify the other units that are required for this test.
  needs: [
    'model:vendor',
    'model:user',
    'model:homepage',
    'model:service'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});
