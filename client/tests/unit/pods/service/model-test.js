import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('service', 'Service', {
  // Specify the other units that are required for this test.
  needs: ['model:vendor']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
