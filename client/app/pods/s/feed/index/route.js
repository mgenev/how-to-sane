import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    fromDate: {
      refreshModel: true
    }
  },
	async setupController(controller, model) {
		try {
			let currentGeo = await this.geoGoogleService.getGeoposition();
			let geo = this.geoGoogleService.getGoogleMapsGeoCoords(currentGeo);
			let currentAddress = await this.geoGoogleService.getAddressForLatLong(geo);
			controller.set('geo', currentGeo);
			controller.set('address', currentAddress);
		}
		catch (err) {
			console.log('GEO ERROR', err);
		}
	},
  model: function (params) {
    return this.store.find('status', {
      sort: 'createdAt desc',
      createdAt: {
        ">": params.fromDate
      }
    });
  }
});
