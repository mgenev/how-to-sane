import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('user', 'User', {
  // Specify the other units that are required for this test.
  needs: [
    'model:post',
    'model:vendor',
    'model:photo',
    'model:album',
    'model:post',
    'model:status',
    'model:homepage',
    'model:template',
    'model:service'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});
