import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('route:s/media/albums/index', 'SMediaAlbumsIndexRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
}, function () {
    it('exists', function () {
        var route = this.subject();
        expect(route).to.be.ok;
    });
});
