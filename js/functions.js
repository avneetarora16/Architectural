
// nav bar & hamburger
function hamburgerMenu() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("logo_id");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
  if (y.className === "logo-a") {
      y.className += " responsive";
  } else {
      y.className = "logo-a";
  }
}


// Office page Maps

// map1
function loadMap(){
  mapboxgl.accessToken = 'pk.eyJ1IjoiYXZuZWV0MjIiLCJhIjoiY2pvbmhsNjAyMWJ6bzNqcGNhODV6MGpncyJ9.bOXEBF6L2NyiKT0Ubx5XjA';
  var feature = {center: [77.1025, 28.70]};
  var map = new mapboxgl.Map({
    container: 'map1', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: feature.center, // starting position [lng, lat]
    zoom: 6 // starting zoom
    });
  new mapboxgl.Marker().setLngLat(feature.center).addTo(map);

  // map2
  mapboxgl.accessToken = 'pk.eyJ1IjoiYXZuZWV0MjIiLCJhIjoiY2pvbmhsNjAyMWJ6bzNqcGNhODV6MGpncyJ9.bOXEBF6L2NyiKT0Ubx5XjA';
  var feature = {center: [77.5946, 12.9716 ]};
  var map = new mapboxgl.Map({
    container: 'map2', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: feature.center, // starting position [lng, lat]
    zoom: 6 // starting zoom
    });
  new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
};



