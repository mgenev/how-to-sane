function Point (latlong, properties) {
    return {
          "type": "Point",
          "coordinates": [latlong.lng, latlong.lat]
    };
}

export default Point;
