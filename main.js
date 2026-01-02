async function init() {
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer
  } = ymaps3;

  const response = await fetch('./customization.json');
  const customization = await response.json();

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
}

init();
