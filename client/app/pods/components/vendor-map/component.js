import Ember from 'ember';

export default Ember.Component.extend({
    getCurrentAddress: Ember.on('init', function () {
        let vendors = this.get('vendors');
        let showPosition = position => {
            this.set('currentAddress', position.coords.latitude + ' ' + position.coords.longitude);
            this.geoGoogleService.drawMap(position.coords, 'mapfeed');

            vendors.forEach(vendor => this.geoGoogleService.createMarker(vendor.get('location')));
        }

        navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition) : console.log('Geolocation is not supported by this browser.');
    })
});
