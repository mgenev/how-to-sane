import Ember from 'ember';
import GeoLocationMixin from 'client/mixins/geolocation-mixin';


export default Ember.Component.extend(GeoLocationMixin, {
	
    startGeo: function() {

        var _this = this;
        this.get('geolocation').start();
		
        this.get('geolocation').getGeoposition().then(function(geoposition) {
            _this.set('geoposition', geoposition);

            _this.drawMap();
            _this.getCurrentAddress(geoposition);
            _this.getNearbyPlaces(geoposition);

        });

    }.on('didInsertElement'),

    drawMap: function(geo) {

        var map = new google.maps.Map(document.getElementById('mapfeed'), {
            center: this.get('areaGeo'),
            zoom: 15
        });
        this.set('map', map);
    },

    areaGeo: function() {
        var geoposition = this.get('geoposition');
        if (geoposition) {
            return new google.maps.LatLng(geoposition.coords.latitude, geoposition.coords.longitude);
        }
    }.property('geoposition'),

    getCurrentAddress: function(geoposition) {

        var _this = this;
        Ember.$.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + geoposition.coords.latitude + ',' + geoposition.coords.longitude,
            type: 'POST'
        }).then(function(response) {
            console.log(response.results[0].formatted_address);
            _this.set('location', response.results[0].formatted_address);
        }, function(xhr, status, error) {

            if (error) {
                console.log(error);
            }
        });
    },
    getNearbyPlaces: function(geoposition) {
        var _this = this;

        var request = {
            location: this.get('areaGeo'),
            radius: '500',
            query: 'restaurant'
        };

        var service = new google.maps.places.PlacesService(this.get('map'));
        service.textSearch(request, callback);

        function callback(results, status) {

            _this.set('nearbyLocations', results);

            // TODO pin the markers
            // if (status == google.maps.places.PlacesServiceStatus.OK) {
            //     for (var i = 0; i < results.length; i++) {
            //         var place = results[i];
            //         createMarker(results[i]);
            //     }
            // }

        }
    }

});
