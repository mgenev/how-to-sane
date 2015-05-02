/* jshint ignore:start */
import Ember from 'ember';
import { point } from 'client/utils/to-geo-json';

export default Ember.Object.extend({

  getGeoposition() {
    // TODO try async here
    return new Promise( (resolve, reject) => {
      let success = pos => resolve(pos.coords);
      let error = err => console.warn(`ERROR(${err.code}): ${err.message}`);
      navigator.geolocation.getCurrentPosition(success, error);
    });
  },

  getGoogleMapsGeoCoords(geo) {
    return new google.maps.LatLng(geo.latitude, geo.longitude);
  },

  geocoding(lookup, reverse) {
    let url;
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
  getCurrentAddress() {
    return this.getAddressForLatLong(this.getGeoposition());
  },

  async getLatLongForAddress(address) {
    let location = await this.geocoding(address);
    return point(location.results[0].geometry.location);
  },

  async getAddressForLatLong(latlong) {
    let geo = await this.geocoding(latlong, true);
    return geo.results[0].formatted_address;
  },

  getNearbyPlaces(geo, pinMarkers) {
    let request = {
      location: this.getGoogleMapsGeoCoords(geo),
      radius: '500',
      query: 'restaurant'
    };

    // TODO rewrite with async
    let service = new google.maps.places.PlacesService(this.get('map'));
    service.textSearch(request, callback);

    let callback = (results, status) => {
      this.set('nearbyPlaces', results);
      if (status === google.maps.places.PlacesServiceStatus.OK && pinMarkers) {
        for (var i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }
      }
    }
  },

  drawMap(geo, mapElementSelector, pinCenter) {

    let center = this.getGoogleMapsGeoCoords(geo);
    let infoWindow = new google.maps.InfoWindow();
    let map = new google.maps.Map(document.getElementById(mapElementSelector), {
      center: center,
      zoom: 14
    });

    this.set('infoWindow', infoWindow);
    this.set('map', map);

    if (pinCenter) {
      new google.maps.Marker({
        map: map,
        position: center,
        icon: '/images/icons/smiley_happy.png'
      });
    }
  },

  createMarker(place) {
    let location = this.getGoogleMapsGeoCoords({
      latitude: parseFloat(place.coordinates[1]),
      longitude: parseFloat(place.coordinates[0])
    });

    let marker = new google.maps.Marker({
      map: this.get('map'),
      position: location
    });

    google.maps.event.addListener(marker, 'click', () => {
      this.get('infoWindow').setContent(place.name);
      this.get('infoWindow').open(this.get('map'), this);
    });
  }

});
/* jshint ignore:end */
