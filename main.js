import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer
} from 'ymaps3';

import customization from './customization.json' assert { type: 'json' };

const map = new YMap(
  document.getElementById('map'),
  {
    location: {
      center: [30.3141, 59.9386],
      zoom: 11
    }
  }
);

map.addChild(
  new YMapDefaultSchemeLayer({
    customization
  })
);

map.addChild(new YMapDefaultFeaturesLayer());
