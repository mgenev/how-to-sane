import { expect } from 'chai';
import { describeComponent,it} from 'ember-mocha';

describeComponent(
    'components/wizard-form',
    'WizardFormComponent', {
        integration: true
    },
    function () {

        it('renders', function () {
            // creates the component instance
            var component = this.subject({
              steps: [{
                  caption: 'Post your message',
                  component: 'status-note'
              }]
            });

            expect(component._state).to.equal('preRender');

            // renders the component on the page
            this.render();
            expect(component._state).to.equal('inDOM');
        });
    }
);
