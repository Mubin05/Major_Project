mapboxgl.accessToken = MapToken;
const map = new mapboxgl.Map({
  container: 'map',
  center: listing.geometry.coordinates,
  zoom: 9
});
const marker = new mapboxgl.Marker({ color:"red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
    `<h4>${listing.title}</h4><p>Exact Location Provided after booking</p>`))
  .addTo(map);