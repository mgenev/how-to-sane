import Ember from 'ember';

export default Ember.Component.extend({
    drawVendorMap: Ember.on('init', function () {
        let showPosition = position => {
            this.geoGoogleService.drawMap(position.coords, 'mapfeed');
            this.get('vendors').forEach(vendor => this.geoGoogleService.createMarker(vendor.get('location')));
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    })
});
