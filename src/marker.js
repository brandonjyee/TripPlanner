const mapboxgl = require('mapbox-gl');


function addMarker(type, long, lat) {
  let imgStr = "url(http://i.imgur.com/WbMOfMl.png)";
  if (type === 'activity') {
    imgStr = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if (type === 'hotel') {
    imgStr = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'restaurant') {
    imgStr = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  markerDomEl.style.backgroundImage = imgStr;
  return new mapboxgl.Marker(markerDomEl).setLngLat([long, lat]) //.addTo(map);
}

module.exports = addMarker;
