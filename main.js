const map = L.map('map', {
  zoomControl: false
}).setView([59.9386, 30.3141], 11);

L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { attribution: '' }
).addTo(map);
