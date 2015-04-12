import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('controller:s/feed/status', {
    // needs: ['controller:foo']
}, function () {
    it('exists', function () {
        var controller = this.subject();
        expect(controller).to.be.ok;
    });
});
