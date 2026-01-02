const map = L.map('map', {
  zoomControl: false,
  minZoom: 10,
  maxZoom: 14
}).setView([59.9386, 30.3141], 11);

L.tileLayer(
  'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=Vk2WuUzsjOcHeENR50mb',
  {
    tileSize: 512,
    zoomOffset: -1
  }
).addTo(map);

const bounds = [
  [59.70, 29.30],
  [60.20, 30.80]
];

map.setMaxBounds(bounds);
map.on('drag', () => {
  map.panInsideBounds(bounds, { animate: false });
});
