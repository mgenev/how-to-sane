import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('status', 'Status', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:vendor',
    'model:photo',
    'model:album',
    'model:post'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});
