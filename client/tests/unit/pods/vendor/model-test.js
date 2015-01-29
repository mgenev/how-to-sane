import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('vendor', 'Vendor', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:homepage', 'model:template', 'model:service']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
