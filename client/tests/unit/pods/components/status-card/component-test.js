import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

import { initialize } from '../../../../../initializers/ember-moment';

moduleForComponent('status-card', 'StatusCardComponent',  {
    // Specify the other units that are required for this test
    // needs: ['helper:moment'],
    setup: function (container) {
        Ember.run(function () {
            // these two arguments are not used
            // but probably still good to pass them in
            // in the event we leverage them in the future
            initialize(container);
        });
    }
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject({
    steps: []
  });
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});
