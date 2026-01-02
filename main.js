const map = L.map('map', {
  zoomControl: false
}).setView([59.9386, 30.3141], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: ''
}).addTo(map);
