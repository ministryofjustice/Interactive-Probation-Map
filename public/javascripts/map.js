// var json = './data/Police_Force_Areas_December_2016_Full_Extent_Boundaries_in_England_and_Wales.geojson'
var json = './data/sample.geojson'

var style = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 255, 255, 0.6)'
  }),
  stroke: new ol.style.Stroke({
    color: '#319FD3',
    width: 1
  }),
  text: new ol.style.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.style.Fill({
      color: '#000'
    }),
    stroke: new ol.style.Stroke({
      color: '#fff',
      width: 3
    })
  })
})

var vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: json,
    format: new ol.format.GeoJSON()
  }),
  style: function (feature) {
    style.getText().setText(feature.get('name'))
    return style
  }
})

var map = new ol.Map({
  layers:
  [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer
  ],
  target: 'map',
  view: new ol.View({
    center: [102.0, 0.5],
    zoom: 2
  })
})
