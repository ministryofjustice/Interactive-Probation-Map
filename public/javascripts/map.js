var npsStyle = '<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><NamedLayer><Name>probation:nps_regions</Name>                                <UserStyle>      <Title>A dark yellow generic style</Title>      <FeatureTypeStyle><Rule>  <Title>polygon</Title>  <ogc:Filter>    <ogc:PropertyIsEqualTo>      <ogc:Function name="dimension"><ogc:Function name="geometry"/>      </ogc:Function>      <ogc:Literal>2</ogc:Literal>    </ogc:PropertyIsEqualTo>  </ogc:Filter>  <PolygonSymbolizer>    <Fill>      <CssParameter name="fill">#99CC00</CssParameter>      <CssParameter name="fill-opacity">0.5</CssParameter>    </Fill>    <Stroke>      <CssParameter name="stroke">#000000</CssParameter>      <CssParameter name="stroke-width">0.5</CssParameter>    </Stroke>  </PolygonSymbolizer>  <TextSymbolizer>    <Label>      <ogc:PropertyName>ctyua16nm</ogc:PropertyName>    </Label>    <Font>      <CssParameter name="font-family">Arial</CssParameter>      <CssParameter name="font-size">8</CssParameter>      <CssParameter name="font-style">normal</CssParameter>    </Font>    <LabelPlacement>      <PointPlacement><AnchorPoint>  <AnchorPointX>0.5</AnchorPointX>  <AnchorPointY>0.5</AnchorPointY></AnchorPoint>      </PointPlacement>    </LabelPlacement>    <Fill>      <CssParameter name="fill">#000000</CssParameter>    </Fill>    <VendorOption name="autoWrap">60</VendorOption>    <VendorOption name="maxDisplacement">100</VendorOption>  </TextSymbolizer></Rule><VendorOption name="ruleEvaluation">first</VendorOption>      </FeatureTypeStyle>    </UserStyle>  </NamedLayer></StyledLayerDescriptor>'

var laaLayer = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/probation/wms?',
    params: {
      LAYERS: 'Local_Authority_Districts_April_2019_Boundaries_UK_BGC ',
      TILED: true
    },
    serverType: 'geoserver'
  })
})

var polLayer = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url:'http://localhost:8080/geoserver/probation/wms?',
    params: {
      LAYERS: 'Police_Force_Areas_December_2018_EW_BGC',
      TILED: true
    },
    serverType: 'geoserver'
  })
})

var npsLayer = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: 'http://localhost:8080/geoserver/probation/wms?',
    params: {
      LAYERS: 'nps_regions',
      TILED: true
    },
    serverType: 'geoserver'
  })
})

var mapBase = new ol.layer.Tile({
  source: new ol.source.OSM({
      "url" : "http://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
  })
})

var centerOnEngland = ol.proj.transform([-1.4701, 53.3811], 'EPSG:4326', 'EPSG:3857')

var map = new ol.Map({
  layers:
  [
  mapBase,
  polLayer,
  npsLayer,
  laaLayer,

  ],
  target: 'map',
  view: new ol.View({
    center: centerOnEngland,
    zoom: 6
  })
})