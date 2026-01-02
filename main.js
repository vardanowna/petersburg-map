import customization from './customization.json' assert { type: 'json' };

await ymaps3.ready;

const {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer
} = ymaps3;

const map = new YMap(
  document.getElementById('map'),
  {
    location: {
      center: [30.3158, 59.9391],
      zoom: 9
    }
  }
);

map.addChild(
  new YMapDefaultSchemeLayer({
    customization
  })
);

map.addChild(new YMapDefaultFeaturesLayer());
