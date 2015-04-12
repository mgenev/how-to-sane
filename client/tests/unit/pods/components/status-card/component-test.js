import { expect } from 'chai';
import { describeComponent,it} from 'ember-mocha';
import { initialize } from '../../../../../initializers/ember-moment';

describeComponent(
    'components/status-card',
    'StatusCardComponent', {
        integration: true
    },
    function () {

        it('renders', function () {
            initialize(this.container);
            // creates the component instance
            var component = this.subject();
            expect(component._state).to.equal('preRender');

            // renders the component on the page
            this.render();
            expect(component._state).to.equal('inDOM');
        });
    }
);
