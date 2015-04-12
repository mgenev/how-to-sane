import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('service:geo-google', {
    // needs: ['controller:foo']
}, function () {
    it('exists', function () {
        var service = this.subject();
        expect(service).to.be.ok;
    });
});
