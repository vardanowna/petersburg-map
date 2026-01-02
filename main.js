const map = L.map('map', {
  zoomControl: false,
  minZoom: 9,
  maxZoom: 13
}).setView([59.9386, 30.3141], 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.ru/{z}/{x}/{y}.png',
  { attribution: '' }
).addTo(map);
