import {
  moduleForModel,
  test
} from 'ember-qunit';

import Album from 'client/app/models/album';
import User from 'client/app/models/user';
import Photo from 'client/app/models/photo';

moduleForModel('album', 'Album', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:photo']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
