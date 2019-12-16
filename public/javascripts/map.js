var wmsLayer = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: 'https://ons-inspire.esriuk.com/arcgis/services/Administrative_Boundaries/Counties_April_2019_EN_BFC/MapServer/WMSServer?',
    params: {
      LAYERS: '0',
      TILED: true
    },
    serverType: 'geoserver'
    // Countries have transparency, so do not fade tiles:
  })
})

var centerOnEngland = ol.proj.transform([-3.4359729, 55.3780518], 'EPSG:4326', 'EPSG:3857')

var map = new ol.Map({
  layers:
  [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    wmsLayer
  ],
  target: 'map',
  view: new ol.View({
    center: centerOnEngland,
    zoom: 5
  })
})
