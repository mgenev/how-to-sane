export default function toGeoJson(latlong, properties) {

    return {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "properties": properties,
          "coordinates": [latlong.lat, latlong.lng]
        }
    };
}
