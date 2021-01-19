navigator.geolocation.getCurrentPosition(success, error, {
  enableHighAccuracy: true,
});

function success(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function error() {
  setupMap([-79.38704606313223, 43.642693446025106]);
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFya2lyYXRzaW5naHZpcmRpIiwiYSI6ImNrazIxd2JobTB3d3EydnQxczd6cWp6cmcifQ.QoxRNRFF46cjlcZ1yz61jg";

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 17,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );
}
