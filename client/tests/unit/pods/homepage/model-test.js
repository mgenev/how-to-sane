import {
  moduleForModel,
  test
} from 'ember-qunit';

import Homepage from 'client/app/models/homepage';
import Vendor from 'client/app/models/vendor';


moduleForModel('homepage', 'Homepage', {
  // Specify the other units that are required for this test.
  needs: ['model:vendor']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
