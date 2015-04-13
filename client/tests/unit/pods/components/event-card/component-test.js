import { expect } from 'chai';
import { describeComponent,it} from 'ember-mocha';

import { initialize} from '../../../../../initializers/ember-moment';

describeComponent(
    'components/event-card',
    'ComponentsEventCardComponent', {
        integration: true
    },
    function () {

        it('spy works', function () {
            // creates the component instance
            function hello(name, cb) {
                cb("hello " + name);
            }

            var cb = sinon.spy();
            hello("foo", cb);

            expect(cb.called).to.be.true;
        });

        it('renders', function () {
            // creates the component instance
            initialize(this.container);
            var component = this.subject();
            expect(component._state).to.equal('preRender');

            // renders the component on the page
            this.render();
            expect(component._state).to.equal('inDOM');
        });

    }
);
