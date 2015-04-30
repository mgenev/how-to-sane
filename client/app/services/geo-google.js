/* jshint ignore:start */
import Ember from 'ember';
import {
  point
}
from 'client/utils/to-geo-json';

export default Ember.Object.extend({

  getGeoposition: function () {

    return new Promise( (resolve, reject) => {
      let success = pos => resolve(pos.coords);
      let error = err => console.warn(`ERROR(${err.code}): ${err.message}`);
      navigator.geolocation.getCurrentPosition(success, error);
    });
  },

  getGoogleMapsGeoCoords: function (geo) {
    return new google.maps.LatLng(geo.latitude, geo.longitude);
  },

  geocoding: function (lookup, reverse) {
    var url;
    if (reverse) {
      url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lookup.A + ',' + lookup.F;
    } else {
      url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + lookup;
    }

    return Ember.$.ajax({
      url: url,
      type: 'POST'
    });
  },

  getCurrentAddress: function () {
    return this.getAddressForLatLong(this.getGeoposition());
  },

  getLatLongForAddress: async function (address) {
    let location = await this.geocoding(address);
    return point(location.results[0].geometry.location);
  },

  getAddressForLatLong: async function (latlong) {
    return this.geocoding(latlong, true).then(function (result) {
      return result.results[0].formatted_address;
    });
  },

  getNearbyPlaces: function (geo, pinMarkers) {
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

  drawMap: function (geo, mapElementSelector) {

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

  createMarker: function (place) {

    var location = {
      latitude: parseFloat(place.coordinates[1]),
      longitude: parseFloat(place.coordinates[0])
    };
    var placeLoc = this.getGoogleMapsGeoCoords(location);

    var marker = new google.maps.Marker({
      map: this.get('map'),
      position: placeLoc
    });

    google.maps.event.addListener(marker, 'click', () => {
      this.get('infoWindow').setContent(place.name);
      this.get('infoWindow').open(this.get('map'), this);
    });
  }

});
/* jshint ignore:end */
