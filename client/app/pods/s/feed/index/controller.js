/* jshint ignore:start */
import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['fromDate'],
  fromDate: null,
  showStatusWizard: false,
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

          // TODO save geojson location for the checkin and address
          await model.save();
          this.toggleProperty('showStatusWizard');
        } catch (err) {
          // TODO flash the error message
          console.log('There was a problem with posting your status', err);
        }

      }
  },
  setGeo: Ember.on('init', async function () {
      try {
        let currentGeo = await this.geoGoogleService.getGeoposition();
        let geo = this.geoGoogleService.getGoogleMapsGeoCoords(currentGeo);
        let currentAddress = await this.geoGoogleService.getAddressForLatLong(geo);
        this.set('geo', currentGeo);
        this.set('address', currentAddress);
      } catch (err) {
        console.log('GEO ERROR', err);
      }
    })
});
/* jshint ignore:end */
