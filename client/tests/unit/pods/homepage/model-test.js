import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('homepage', 'Homepage', {
  // Specify the other units that are required for this test.
  needs: [
    'model:vendor',
    'model:user',
    'model:template',
    'model:service'
  ]
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
