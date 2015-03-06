import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('service', 'Service', {
  // Specify the other units that are required for this test.
  needs: [
    'model:vendor',
    'model:user',
    'model:homepage',
    'model:template'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});
