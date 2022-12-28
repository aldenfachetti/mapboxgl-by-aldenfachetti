mapboxgl.accessToken =
  "pk.eyJ1IjoiZmVhbm9ybm9sZG9yIiwiYSI6ImNsYmp4OHZjbjFlNzYzbnBmbjJpanRyM2kifQ.sFXRncfx9SE57JFqtEiYpg";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/feanornoldor/clbjxe0os000314p27bc1a4kx", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 3, // starting zoom
});
