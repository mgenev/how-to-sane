import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('template', 'Template', {
  // Specify the other units that are required for this test.
  needs: ['model:vendor']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
