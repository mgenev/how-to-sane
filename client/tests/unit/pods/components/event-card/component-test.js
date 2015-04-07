import {
    moduleForComponent,
    test
} from 'ember-qunit';

import { initialize } from '../../../../../initializers/ember-moment';

moduleForComponent('event-card', 'EventCardComponent',  {integration: true});

test('it renders', function (assert) {
    assert.expect(2);
    initialize(this.container);
    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
});
