const init = async () => {
  const response = await fetch('./customization.json');
  const customization = await response.json();

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

  const map = new YMap(
    document.getElementById('map'),
    {
      location: {
        center: [30.31413, 59.93863],
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
};

ymaps3.ready.then(init);
