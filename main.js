(async () => {
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
        center: [30.3158, 59.9398],
        zoom: 10
      }
    }
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());
})();
