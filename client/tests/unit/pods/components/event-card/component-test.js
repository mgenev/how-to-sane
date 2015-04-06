import {
    moduleForComponent,
    test
} from 'ember-qunit';

import Ember from 'ember';

import { initialize } from '../../../../../initializers/ember-moment';

moduleForComponent('event-card', 'EventCardComponent',  {
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

test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
});
