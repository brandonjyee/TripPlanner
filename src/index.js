const mapboxgl = require('mapbox-gl');
// import addMarker from './marker';
const addMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmp5ZWUiLCJhIjoiY2ppbTQ0dnQyMDA2NDN3bWxjdWJhYTg2eiJ9.aXXgrJ9QqwY5Nvz8q3aaCg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12,
  // style: "mapbox://styles/mapbox/streets-v10",
  // style: "mapbox://styles/mapbox/outdoors-v10",
  style: "mapbox://styles/mapbox/dark-v9",
});

console.log("I'm running correctly!");

const myMarker = addMarker('activity', -87.6354, 41.8885);
myMarker.addTo(map);
// new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map);
