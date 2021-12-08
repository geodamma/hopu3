var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975年衛星影像",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13170261.546233, 2805721.072196, 13171773.767806, 2806912.362460]
                            })
                        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 廢棄'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 鋼棚'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 鋼筋水泥'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 鐵皮'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 磚造'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1975_1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1975_1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr__2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__3.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__4.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__5.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__6.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__2.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__3.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__4.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__5.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__6.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__2.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__3.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__4.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'inline label', });
lyr__5.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__6.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});