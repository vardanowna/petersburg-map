const map = L.map('map', {
  zoomControl: false,
  minZoom: 9,
  maxZoom: 13
}).setView([59.9386, 30.3141], 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.ru/{z}/{x}/{y}.png',
  { attribution: '' }
).addTo(map);

const petersburgBounds = [
  [59.70, 29.30],
  [60.20, 30.80]
];

map.setMaxBounds(petersburgBounds);
map.on('drag', () => {
  map.panInsideBounds(petersburgBounds, { animate: false });
});
