/* jshint ignore:start */
import Ember from 'ember';
import { point } from 'client/utils/to-geo-json';

export default Ember.Object.extend({

  async getGeoposition() {
    return new Promise( (resolve, reject) => {
      let success = pos => resolve(pos.coords);
      let error = err => console.warn(`ERROR(${err.code}): ${err.message}`);
      navigator.geolocation.getCurrentPosition(success, error);
    });
  },

  async geocoding(lookup, reverse) {
    let url = reverse ? `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lookup.latitude},${lookup.longitude}` : `https://maps.googleapis.com/maps/api/geocode/json?address=${lookup}`;
    return Ember.$.ajax({ url: url, type: 'POST' });
  },

  async getCurrentAddress() {
    let geo = await this.getGeoposition();
    return await this.getAddressForLatLong(geo);
  },

  async getLatLongForAddress(address) {
    let location = await this.geocoding(address);
    return point(location.results[0].geometry.location);
  },

  async getAddressForLatLong(latlong) {
    let geo = await this.geocoding(latlong, true);
    return geo.results[0].formatted_address;
  },

  getNearbyPlaces(geo, pinMarkers=false) {

    let request = {
      location: this.getGoogleMapsGeoCoords(geo),
      radius: '500',
      query: 'restaurant'
    };
    // var _this = this;
    var service = new google.maps.places.PlacesService(this.get('map'));

    return new Promise( (resolve) => {
      service.textSearch(request, (results, status) => {
         if (status === google.maps.places.PlacesServiceStatus.OK && pinMarkers) {
             for (var i = 0; i < results.length; i++) {
                 this.createMarker({coordinates: [results[i].geometry.location.F, results[i].geometry.location.A]});
             }
         }
         resolve(results);
      });
    });
  },

  drawMap(geo, mapElementSelector, pinCenter=false) {

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
        position: center
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
  },

  getGoogleMapsGeoCoords(geo) {
    return new google.maps.LatLng(geo.latitude, geo.longitude);
  }
});
/* jshint ignore:end */
