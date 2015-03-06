import {
  moduleForModel,
  test
} from 'ember-qunit';

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
