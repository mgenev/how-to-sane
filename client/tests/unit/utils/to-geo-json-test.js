import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';
import toGeoJson from 'client/utils/to-geo-json';

describeModule('toGeoJson');

it('exists', function () {
    var result = toGeoJson.point({
      lng: 0,
      lat: 0
    });
    expect(result).to.be.ok;
});
