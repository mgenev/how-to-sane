export default {
    point: point
};

export function point (latlong, properties) {
    return {
          "type": "Point",
          "coordinates": [latlong.lng, latlong.lat]
    };
}
