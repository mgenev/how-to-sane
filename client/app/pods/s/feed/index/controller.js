/* jshint ignore:start */
import Ember from 'ember';
import { point } from 'client/utils/to-geo-json';

export default Ember.Controller.extend({
  queryParams: ['fromDate'],
  fromDate: null,
  showStatusWizard: false,
  setGeo: Ember.on('init', async function () {
    try {
      let geo = await this.geoGoogleService.getGeoposition();
      let address = await this.geoGoogleService.getAddressForLatLong(geo);
      this.set('geo', geo);
      this.set('address', address);
    } catch (err) {
      console.log('There was a problem with detecting your location', err);
    }
  }),
  actions: {
    clearDate() {
      this.set('fromDate', null);
    },
    showStatusWizard() {
      this.toggleProperty('showStatusWizard');
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
        this.toggleProperty('showStatusWizard');
      } catch (err) {
        // TODO flash the error message
        console.log('There was a problem with posting your status', err);
      }
    }
  }
});
/* jshint ignore:end */
