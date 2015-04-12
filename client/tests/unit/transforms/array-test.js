import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('transform:array', {
    // needs: ['controller:foo']
}, function () {
    it('exists', function () {
        var transform = this.subject();
        expect(transform).to.be.ok;
    });
});
