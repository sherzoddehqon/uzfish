var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 0.619000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVI_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7634148.200007, 4987305.893798, 7670837.973612, 5004867.301097]
                            })
                        });
var lyr_TCTfishtruecolor_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "TCT fish true color",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TCTfishtruecolor_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7634148.200007, 4987305.893798, 7670837.973612, 5004867.301097]
                            })
                        });
var lyr_TCTfishsceneclassificationmap_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "TCT fish scene classification map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TCTfishsceneclassificationmap_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7634148.200007, 4987305.893798, 7670837.973612, 5004867.301097]
                            })
                        });
var lyr_TCTfishNDWI_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "TCT fish NDWI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TCTfishNDWI_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7634148.200007, 4987305.893798, 7670837.973612, 5004867.301097]
                            })
                        });
var lyr_NDVI_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7674764.925833, 4991949.443276, 7693109.812635, 5000730.146932]
                            })
                        });
var lyr_NDWI_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDWI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDWI_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7674764.925833, 4991949.443276, 7693109.812635, 5000730.146932]
                            })
                        });
var lyr_scene_classification_map_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "scene_classification_map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/scene_classification_map_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7673704.362112, 4991146.854382, 7692049.248914, 4999927.558069]
                            })
                        });
var format_baliqchilik_10 = new ol.format.GeoJSON();
var features_baliqchilik_10 = format_baliqchilik_10.readFeatures(json_baliqchilik_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_baliqchilik_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_baliqchilik_10.addFeatures(features_baliqchilik_10);
var lyr_baliqchilik_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_baliqchilik_10, 
                style: style_baliqchilik_10,
                popuplayertitle: "baliqchilik",
                interactive: true,
                title: '<img src="styles/legend/baliqchilik_10.png" /> baliqchilik'
            });
var format_border_11 = new ol.format.GeoJSON();
var features_border_11 = format_border_11.readFeatures(json_border_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_border_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_border_11.addFeatures(features_border_11);
var lyr_border_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_border_11, 
                style: style_border_11,
                popuplayertitle: "border",
                interactive: true,
                title: '<img src="styles/legend/border_11.png" /> border'
            });
var group_Oqqorgon = new ol.layer.Group({
                                layers: [lyr_NDVI_7,lyr_NDWI_8,lyr_scene_classification_map_9,],
                                fold: "open",
                                title: "Oqqo'rg'on"});
var group_TCTFish = new ol.layer.Group({
                                layers: [lyr_NDVI_3,lyr_TCTfishtruecolor_4,lyr_TCTfishsceneclassificationmap_5,lyr_TCTfishNDWI_6,],
                                fold: "open",
                                title: "TCT Fish"});
var group_xaritalar = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleMaps_2,],
                                fold: "open",
                                title: "xaritalar"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_NDVI_3.setVisible(true);lyr_TCTfishtruecolor_4.setVisible(true);lyr_TCTfishsceneclassificationmap_5.setVisible(true);lyr_TCTfishNDWI_6.setVisible(true);lyr_NDVI_7.setVisible(true);lyr_NDWI_8.setVisible(true);lyr_scene_classification_map_9.setVisible(true);lyr_baliqchilik_10.setVisible(true);lyr_border_11.setVisible(true);
var layersList = [group_xaritalar,group_TCTFish,group_Oqqorgon,lyr_baliqchilik_10,lyr_border_11];
lyr_baliqchilik_10.set('fieldAliases', {'fid': 'ID', 'contour_nu': 'contour_nu', 'cadastral_': 'Kadast raqami', 'tax_number': 'STIR', 'full_name': 'Nomi', 'legal_area': 'ajratilgan maydoni, ga', 'cad_prefix': 'kadastr_prefix', 'duration': 'duration', 'gis_area': 'hisoblangan maydoni, ga', 'viloyat': 'viloyat', 'tuman': 'tuman', 'massive': 'massive', 'arable_are': 'arable_are', 'arable_a_1': 'arable_a_1', 'aryk_canal': 'aryk_canal', 'builds_and': 'builds_and', 'farmland_a': 'farmland_a', 'gardens_ar': 'gardens_ar', 'greenhouse': 'greenhouse', 'hayfields_': 'hayfields_', 'lake_areas': 'lake_areas', 'lode_areas': 'lode_areas', 'mulberry_t': 'mulberry_t', 'othr_peren': 'othr_peren', 'pastures_a': 'pastures_a', 'poplar_gro': 'poplar_gro', 'reclamatn_': 'reclamatn_', 'rivers_and': 'rivers_and', 'roads_and_': 'roads_and_', 'shelterbel': 'shelterbel', 'shrubbery_': 'shrubbery_', 'streets_an': 'streets_an', 'total_arab': 'total_arab', 'total_area': 'total_area', 'total_fact': 'total_fact', 'total_farm': 'total_farm', 'total_fore': 'total_fore', 'pastures_1': 'pastures_1', 'total_pern': 'total_pern', 'total_unde': 'total_unde', 'unused_oth': 'unused_oth', 'vineyards_': 'vineyards_', 'water_rese': 'water_rese', 'al_lnd_nus': 'al_lnd_nus', 'artificial': 'artificial', 'backyard_l': 'backyard_l', 'bad_land_a': 'bad_land_a', 'bush_land_': 'bush_land_', 'constructi': 'constructi', 'ilegaly_oc': 'ilegaly_oc', 'natural_la': 'natural_la', 'viloyat_co': 'viloyat_co', 'status': 'status', 'lot_reg_nu': 'lot_reg_nu', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_border_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'NAME_LEN': 'NAME_LEN', 'NAME_FR': 'NAME_FR', 'ISO_A3': 'ISO_A3', 'ISO_A2': 'ISO_A2', 'ABBREV_LEN': 'ABBREV_LEN', 'FIPS_10_': 'FIPS_10_', 'ECONOMY': 'ECONOMY', 'ADM0_A3_US': 'ADM0_A3_US', 'NAME_NL': 'NAME_NL', 'NAME_SORT': 'NAME_SORT', 'TINY': 'TINY', 'ADM0_DIF': 'ADM0_DIF', 'SUBREGION': 'SUBREGION', 'ADM0_A3_UN': 'ADM0_A3_UN', 'NAME_RU': 'NAME_RU', 'GDP_MD_EST': 'GDP_MD_EST', 'NAME_ES': 'NAME_ES', 'WIKIPEDIA': 'WIKIPEDIA', 'GDP_YEAR': 'GDP_YEAR', 'NAME_EL': 'NAME_EL', 'NAME_EN': 'NAME_EN', 'BRK_DIFF': 'BRK_DIFF', 'NAME_VI': 'NAME_VI', 'POP_RANK': 'POP_RANK', 'ISO_N3': 'ISO_N3', 'BRK_NAME': 'BRK_NAME', 'REGION_UN': 'REGION_UN', 'REGION_WB': 'REGION_WB', 'NOTE_BRK': 'NOTE_BRK', 'SUBUNIT': 'SUBUNIT', 'GU_A3': 'GU_A3', 'NAME_HU': 'NAME_HU', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'NAME_HI': 'NAME_HI', 'FORMAL_FR': 'FORMAL_FR', 'SU_A3': 'SU_A3', 'POP_EST': 'POP_EST', 'GEOUNIT': 'GEOUNIT', 'HOMEPART': 'HOMEPART', 'NAME_ALT': 'NAME_ALT', 'NAME_PL': 'NAME_PL', 'BRK_A3': 'BRK_A3', 'NAME_PT': 'NAME_PT', 'WOE_ID': 'WOE_ID', 'scalerank': 'scalerank', 'LASTCENSUS': 'LASTCENSUS', 'UN_A3': 'UN_A3', 'LABELRANK': 'LABELRANK', 'NAME_SV': 'NAME_SV', 'NAME_BN': 'NAME_BN', 'ABBREV': 'ABBREV', 'MIN_ZOOM': 'MIN_ZOOM', 'ADM0_A3_IS': 'ADM0_A3_IS', 'NAME_JA': 'NAME_JA', 'ADMIN': 'ADMIN', 'NAME_AR': 'NAME_AR', 'SOVEREIGNT': 'SOVEREIGNT', 'ISO_A3_EH': 'ISO_A3_EH', 'MAX_LABEL': 'MAX_LABEL', 'NAME_IT': 'NAME_IT', 'INCOME_GRP': 'INCOME_GRP', 'SOV_A3': 'SOV_A3', 'NOTE_ADM0': 'NOTE_ADM0', 'NAME_ID': 'NAME_ID', 'TYPE': 'TYPE', 'NAME_CIAWF': 'NAME_CIAWF', 'NAME_DE': 'NAME_DE', 'ADM0_A3': 'ADM0_A3', 'WIKIDATAID': 'WIKIDATAID', 'POSTAL': 'POSTAL', 'LONG_LEN': 'LONG_LEN', 'WOE_ID_EH': 'WOE_ID_EH', 'LEVEL': 'LEVEL', 'FORMAL_EN': 'FORMAL_EN', 'POP_YEAR': 'POP_YEAR', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'NAME_TR': 'NAME_TR', 'GEOU_DIF': 'GEOU_DIF', 'MAPCOLOR13': 'MAPCOLOR13', 'BRK_GROUP': 'BRK_GROUP', 'SU_DIF': 'SU_DIF', 'featurecla': 'featurecla', 'MIN_LABEL': 'MIN_LABEL', 'NAME_ZH': 'NAME_ZH', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'NAME_KO': 'NAME_KO', 'NE_ID': 'NE_ID', 'NAME_LONG': 'NAME_LONG', });
lyr_baliqchilik_10.set('fieldImages', {'fid': 'TextEdit', 'contour_nu': 'Hidden', 'cadastral_': 'Hidden', 'tax_number': 'TextEdit', 'full_name': 'TextEdit', 'legal_area': 'TextEdit', 'cad_prefix': 'TextEdit', 'duration': 'Hidden', 'gis_area': 'TextEdit', 'viloyat': 'TextEdit', 'tuman': 'TextEdit', 'massive': 'TextEdit', 'arable_are': 'Hidden', 'arable_a_1': 'Hidden', 'aryk_canal': 'Hidden', 'builds_and': 'Hidden', 'farmland_a': 'Hidden', 'gardens_ar': 'Hidden', 'greenhouse': 'Hidden', 'hayfields_': 'Hidden', 'lake_areas': 'Hidden', 'lode_areas': 'Hidden', 'mulberry_t': 'Hidden', 'othr_peren': 'Hidden', 'pastures_a': 'Hidden', 'poplar_gro': 'Hidden', 'reclamatn_': 'Hidden', 'rivers_and': 'Hidden', 'roads_and_': 'Hidden', 'shelterbel': 'Hidden', 'shrubbery_': 'Hidden', 'streets_an': 'Hidden', 'total_arab': 'Hidden', 'total_area': 'Hidden', 'total_fact': 'Hidden', 'total_farm': 'Hidden', 'total_fore': 'Hidden', 'pastures_1': 'Hidden', 'total_pern': 'Hidden', 'total_unde': 'Hidden', 'unused_oth': 'Hidden', 'vineyards_': 'Hidden', 'water_rese': 'Hidden', 'al_lnd_nus': 'Hidden', 'artificial': 'Hidden', 'backyard_l': 'Hidden', 'bad_land_a': 'Hidden', 'bush_land_': 'Hidden', 'constructi': 'Hidden', 'ilegaly_oc': 'Hidden', 'natural_la': 'Hidden', 'viloyat_co': 'Hidden', 'status': 'Hidden', 'lot_reg_nu': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_border_11.set('fieldImages', {'fid': 'Hidden', 'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'NAME_LEN': 'Hidden', 'NAME_FR': 'Hidden', 'ISO_A3': 'Hidden', 'ISO_A2': 'Hidden', 'ABBREV_LEN': 'Hidden', 'FIPS_10_': 'Hidden', 'ECONOMY': 'Hidden', 'ADM0_A3_US': 'Hidden', 'NAME_NL': 'Hidden', 'NAME_SORT': 'Hidden', 'TINY': 'Hidden', 'ADM0_DIF': 'Hidden', 'SUBREGION': 'Hidden', 'ADM0_A3_UN': 'Hidden', 'NAME_RU': 'Hidden', 'GDP_MD_EST': 'Hidden', 'NAME_ES': 'Hidden', 'WIKIPEDIA': 'Hidden', 'GDP_YEAR': 'Hidden', 'NAME_EL': 'Hidden', 'NAME_EN': 'Hidden', 'BRK_DIFF': 'Hidden', 'NAME_VI': 'Hidden', 'POP_RANK': 'Hidden', 'ISO_N3': 'Hidden', 'BRK_NAME': 'Hidden', 'REGION_UN': 'Hidden', 'REGION_WB': 'Hidden', 'NOTE_BRK': 'Hidden', 'SUBUNIT': 'Hidden', 'GU_A3': 'Hidden', 'NAME_HU': 'Hidden', 'MAPCOLOR7': 'Hidden', 'MAPCOLOR8': 'Hidden', 'MAPCOLOR9': 'Hidden', 'NAME_HI': 'Hidden', 'FORMAL_FR': 'Hidden', 'SU_A3': 'Hidden', 'POP_EST': 'Hidden', 'GEOUNIT': 'Hidden', 'HOMEPART': 'Hidden', 'NAME_ALT': 'Hidden', 'NAME_PL': 'Hidden', 'BRK_A3': 'Hidden', 'NAME_PT': 'Hidden', 'WOE_ID': 'Hidden', 'scalerank': 'Hidden', 'LASTCENSUS': 'Hidden', 'UN_A3': 'Hidden', 'LABELRANK': 'Hidden', 'NAME_SV': 'Hidden', 'NAME_BN': 'Hidden', 'ABBREV': 'Hidden', 'MIN_ZOOM': 'Hidden', 'ADM0_A3_IS': 'Hidden', 'NAME_JA': 'Hidden', 'ADMIN': 'Hidden', 'NAME_AR': 'Hidden', 'SOVEREIGNT': 'Hidden', 'ISO_A3_EH': 'Hidden', 'MAX_LABEL': 'Hidden', 'NAME_IT': 'Hidden', 'INCOME_GRP': 'Hidden', 'SOV_A3': 'Hidden', 'NOTE_ADM0': 'Hidden', 'NAME_ID': 'Hidden', 'TYPE': 'Hidden', 'NAME_CIAWF': 'Hidden', 'NAME_DE': 'Hidden', 'ADM0_A3': 'Hidden', 'WIKIDATAID': 'Hidden', 'POSTAL': 'Hidden', 'LONG_LEN': 'Hidden', 'WOE_ID_EH': 'Hidden', 'LEVEL': 'Hidden', 'FORMAL_EN': 'Hidden', 'POP_YEAR': 'Hidden', 'WOE_NOTE': 'Hidden', 'ADM0_A3_WB': 'Hidden', 'CONTINENT': 'Hidden', 'NAME_TR': 'Hidden', 'GEOU_DIF': 'Hidden', 'MAPCOLOR13': 'Hidden', 'BRK_GROUP': 'Hidden', 'SU_DIF': 'Hidden', 'featurecla': 'Hidden', 'MIN_LABEL': 'Hidden', 'NAME_ZH': 'Hidden', 'WB_A2': 'Hidden', 'WB_A3': 'Hidden', 'NAME_KO': 'Hidden', 'NE_ID': 'Hidden', 'NAME_LONG': 'Hidden', });
lyr_baliqchilik_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'tax_number': 'inline label - visible with data', 'full_name': 'inline label - always visible', 'legal_area': 'inline label - always visible', 'cad_prefix': 'inline label - always visible', 'gis_area': 'inline label - always visible', 'viloyat': 'no label', 'tuman': 'inline label - visible with data', 'massive': 'inline label - visible with data', });
lyr_border_11.set('fieldLabels', {});
lyr_border_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});