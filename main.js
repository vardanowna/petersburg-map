ymaps.ready(init);

function init() {
  const map = new ymaps.Map('map', {
    center: [59.9386, 30.3141],
    zoom: 11,
    controls: []
  });

  map.setType('yandex#map');

  map.options.set('styles', [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: {
        color: '#f5f7f9'
      }
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: {
        color: '#cfe3f1'
      }
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: {
        color: '#c2c7cc'
      }
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: {
        color: '#7a7f85'
      }
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: {
        visibility: 'off'
      }
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: {
        color: '#eceff2'
      }
    }
  ]);
}
