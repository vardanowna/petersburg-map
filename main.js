function initMap() {
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer
  } = window.ymaps3;

  const map = new YMap(
    document.getElementById('map'),
    {
      location: {
        center: [30.3158, 59.9398],
        zoom: 10
      }
    }
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());
}

function waitForYmaps() {
  if (window.ymaps3) {
    window.ymaps3.ready.then(initMap);
  } else {
    setTimeout(waitForYmaps, 50);
  }
}

waitForYmaps();
