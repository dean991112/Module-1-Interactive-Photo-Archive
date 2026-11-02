var wms_layers = [];

var lyr_ModernBaseMap_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Modern Base Map<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ModernBaseMap_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12662778.092838, 2520677.038460, 12747368.359726, 2586698.430168]
        })
    });
var lyr_ShaLoWan2_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sha Lo Wan 2<br />\
    <img src="styles/legend/ShaLoWan2_1_0.png" /> 0<br />\
    <img src="styles/legend/ShaLoWan2_1_1.png" /> 247<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ShaLoWan2_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12679845.531403, 2545712.354939, 12680656.834776, 2546365.663485]
        })
    });
var lyr_ShaLoWan_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sha Lo Wan<br />\
    <img src="styles/legend/ShaLoWan_2_0.png" /> 0<br />\
    <img src="styles/legend/ShaLoWan_2_1.png" /> 245<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ShaLoWan_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12679035.363607, 2545710.869334, 12679846.697639, 2546364.216681]
        })
    });
var lyr_MaWan_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ma Wan<br />\
    <img src="styles/legend/MaWan_3_0.png" /> 0<br />\
    <img src="styles/legend/MaWan_3_1.png" /> 232<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MaWan_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12683087.249417, 2545066.066256, 12683898.398467, 2545719.194251]
        })
    });
var lyr_MaWan2_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ma Wan 2<br />\
    <img src="styles/legend/MaWan2_4_0.png" /> 0<br />\
    <img src="styles/legend/MaWan2_4_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MaWan2_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12683086.208071, 2545717.904884, 12683897.388657, 2546371.058106]
        })
    });
var format_FieldPhotoRecords_5 = new ol.format.GeoJSON();
var features_FieldPhotoRecords_5 = format_FieldPhotoRecords_5.readFeatures(json_FieldPhotoRecords_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FieldPhotoRecords_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FieldPhotoRecords_5.addFeatures(features_FieldPhotoRecords_5);
cluster_FieldPhotoRecords_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_FieldPhotoRecords_5
});
var lyr_FieldPhotoRecords_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FieldPhotoRecords_5, 
                style: style_FieldPhotoRecords_5,
                popuplayertitle: 'Field Photo Records',
                interactive: true,
                title: '<img src="styles/legend/FieldPhotoRecords_5.png" /> Field Photo Records'
            });

lyr_ModernBaseMap_0.setVisible(true);lyr_ShaLoWan2_1.setVisible(true);lyr_ShaLoWan_2.setVisible(true);lyr_MaWan_3.setVisible(true);lyr_MaWan2_4.setVisible(true);lyr_FieldPhotoRecords_5.setVisible(true);
var layersList = [lyr_ModernBaseMap_0,lyr_ShaLoWan2_1,lyr_ShaLoWan_2,lyr_MaWan_3,lyr_MaWan2_4,lyr_FieldPhotoRecords_5];
lyr_FieldPhotoRecords_5.set('fieldAliases', {'7': '7', 'box_no': 'box_no', 'file_name': 'Photo ID', 'photo_path': 'Photograph', 'keycode': 'keycode', 'notes': 'notes', 'photographer': 'photographer', 'handler': 'handler', 'Sorting_date': 'Sorting_date', 'shooting_date': 'Date', 'place_name': 'Place', 'direction': 'Direction', 'latitude': 'Latitude', 'longitude': 'Longtitude', 'X': 'X', 'Y': 'Y', 'location_precision': 'Location Precision', 'uncertainty_m': 'uncertainty_m', 'geocode_status': 'geocode_status', 'crs': 'crs', 'source': 'Description', });
lyr_FieldPhotoRecords_5.set('fieldImages', {'7': 'Hidden', 'box_no': 'Hidden', 'file_name': 'TextEdit', 'photo_path': 'ExternalResource', 'keycode': 'Hidden', 'notes': 'Hidden', 'photographer': 'Hidden', 'handler': 'Hidden', 'Sorting_date': 'Hidden', 'shooting_date': 'TextEdit', 'place_name': 'TextEdit', 'direction': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'location_precision': 'TextEdit', 'uncertainty_m': 'Hidden', 'geocode_status': 'Hidden', 'crs': 'Hidden', 'source': 'TextEdit', });
lyr_FieldPhotoRecords_5.set('fieldLabels', {'file_name': 'no label', 'photo_path': 'no label', 'shooting_date': 'no label', 'place_name': 'no label', 'direction': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'location_precision': 'no label', 'source': 'no label', });
lyr_FieldPhotoRecords_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});