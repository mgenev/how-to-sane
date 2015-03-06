import {
  moduleForModel,
  test
} from 'ember-qunit';

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
