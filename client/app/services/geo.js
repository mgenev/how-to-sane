import Ember from 'ember';

export default Ember.Object.extend({

    getGeoposition: function () {
        var options = this.get('options');

        return new Ember.RSVP.Promise(function(resolve, reject) {
            geoPosition.getCurrentPosition(resolve, reject, options);
        });
    },

    currentCoords: function () {
    	this.get('geolocation').getGeoposition().then(function(geoposition) {
            return geoposition.coords;
        });
    },

    getGoogleMapsGeoCoords: function(geo) {
    	return new google.maps.LatLng(geo.latitude, geo.longitude);
    },

    geocoding: function(lookup, reverse) {
    	var url;
    	if (reverse) {
    		url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lookup.latitude + ',' + lookup.longitude;
    	} else {
    		url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + lookup;
    	}

        return Ember.$.ajax({
            url: url,
            type: 'POST'
        });
    },

    getCurrentAddress: function () {
    	return this.getAddressForLatLong(this.get('currentCoords'));
    },

    getLatLongForAddress: function (address) {
        // console.log('GETLATLONG', this.geocoding(address));
   		 return this.geocoding(address);
    },

    getAddressForLatLong: function (latlong) {
   	    return this.geocoding(latlong, true).results[0].formatted_address;
    },

    getNearbyPlaces: function(geo, pinMarkers) {
        var _this = this;

        var request = {
            location: this.googleMapsGeoCoords(geo),
            radius: '500',
            query: 'restaurant'
        };

        var service = new google.maps.places.PlacesService(this.get('map'));
        service.textSearch(request, callback);

        function callback(results, status) {

            _this.set('nearbyLocations', results);

            // if response and boolean present - pin the markers
            if (status === google.maps.places.PlacesServiceStatus.OK && pinMarkers) {
                for (var i = 0; i < results.length; i++) {
                    _this.createMarker(results[i]);
                }
            }

        }
    },

    drawMap: function(geo, mapElementSelector) {

    	var center = this.getGoogleMapsGeoCoords(geo);
    	var infoWindow = new google.maps.InfoWindow();
        var map = new google.maps.Map(document.getElementById(mapElementSelector), {
            center: center,
            zoom: 14
        });

        this.set('infoWindow', infoWindow);
        this.set('map', map);

         new google.maps.Marker({
            map: map,
            position: center,
            icon: '/images/icons/smiley_happy.png'
        });
    },


    createMarker: function(place) {
    	var _this = this;
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: _this.get('map'),
            position: placeLoc
        });

        google.maps.event.addListener(marker, 'click', function() {
            _this.get('infoWindow').setContent(place.name);
            _this.get('infoWindow').open(_this.get('map'), this);
        });
    }

});
