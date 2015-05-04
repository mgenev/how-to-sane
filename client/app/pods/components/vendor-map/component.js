/* jshint ignore:start */
import Ember from 'ember';

export default Ember.Component.extend({
  drawVendorMap: Ember.on('init', async function() {
    try {
      let geo = await this.geoGoogleService.getGeoposition();
      this.geoGoogleService.drawMap(geo, 'mapfeed');
      this.get('vendors').forEach(vendor => this.geoGoogleService.createMarker(vendor.get('location')));
    } catch (err) {
      Ember.get(this, 'flashMessages').error(err);
    }
  })
});
/* jshint ignore:end */
