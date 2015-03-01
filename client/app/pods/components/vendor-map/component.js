import Ember from 'ember';

export default Ember.Component.extend({
    getCurrentAddress: function () {
            var _this = this;
            var vendors = this.get('vendors');

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log('Geolocation is not supported by this browser.');
            }


        function showPosition(position) {
            _this.set('currentAddress', position.coords.latitude + ' ' + position.coords.longitude);
            _this.geoGoogleService.drawMap(position.coords, 'mapfeed');

            vendors.forEach( function (vendor) {
                _this.geoGoogleService.createMarker(vendor.get('location'));
            } );

        }
    }.on('init')
});
