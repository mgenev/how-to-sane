import {
  moduleForComponent,
  test
} from 'ember-qunit';


import { initialize } from '../../../../../initializers/ember-moment';

moduleForComponent('status-card', 'StatusCardComponent',  {integration: true});

test('it renders', function() {
  expect(2);
  initialize(this.container);

  // creates the component instance
  var component = this.subject({
    steps: []
  });
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});
