import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('wizard-form', 'WizardFormComponent', {
  // specify the other units that are required for this test
  needs: ['component:status-note']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject({
    steps: [{
        caption: 'Post your message',
        component: 'status-note'
    }]
  });
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});
