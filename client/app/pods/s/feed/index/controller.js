/* jshint ignore:start */
import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['fromDate'],
    fromDate: null,
    actions: {
        clearDate() {
            this.set('fromDate', null);
        }
    },
    setGeo: Ember.on('init', async function () {
      try {
        let currentGeo = await this.geoGoogleService.getGeoposition();
        let geo = this.geoGoogleService.getGoogleMapsGeoCoords(currentGeo);
        let currentAddress = await this.geoGoogleService.getAddressForLatLong(geo);
        this.set('geo', currentGeo);
        this.set('address', currentAddress);
      }
      catch (err) {
        console.log('GEO ERROR', err);
      }
    })
});
/* jshint ignore:end */
