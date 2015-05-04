/* jshint ignore:start */
import Ember from 'ember';
import { point } from 'client/utils/to-geo-json';

export default Ember.Controller.extend({
  queryParams: ['fromDate'],
  fromDate: null,
  showTopPanel: false,
  setGeo: Ember.on('init', async function () {
    try {
      let geo = await this.geoGoogleService.getGeoposition();
      let address = await this.geoGoogleService.getAddressForLatLong(geo);
      this.drawPlacesMap(geo);
      this.set('geo', geo);
      this.set('address', address);
    } catch (err) {
      Ember.get(this, 'flashMessages').error(err);
    }
  }),
  async drawPlacesMap(geo) {
    try {
      this.geoGoogleService.drawMap(geo, 'mapfeed');
      this.set('nearbyPlaces', await this.geoGoogleService.getNearbyPlaces(geo, true));
    } catch (err) {
      Ember.get(this, 'flashMessages').error(err);
    }
  },
  actions: {
    clearDate() {
      this.set('fromDate', null);
    },
    showStatusWizard() {
      this.set('topPanel', 'feed.post-status');
      this.toggleProperty('showTopPanel');
    },
    showSearchPanel() {
      this.set('topPanel', 'feed.search-panel');
      this.toggleProperty('showTopPanel');
    },
    async postStatus(model) {
      try {
        let userId = this.session.get('user.id');
        let user = await this.store.find('user', userId);
        model.set('user', user);
        model.set('address', this.get('address'));
        let location = { lat: this.get('geo').latitude, lng: this.get('geo').longitude };
        model.set('location', point(location));
        await model.save();
        this.toggleProperty('showTopPanel');
      } catch (err) {
        Ember.get(this, 'flashMessages').error(err);
      }
    }
  }
});
/* jshint ignore:end */
