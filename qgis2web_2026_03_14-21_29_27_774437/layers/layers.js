var wms_layers = [];

var format_Ocean_0 = new ol.format.GeoJSON();
var features_Ocean_0 = format_Ocean_0.readFeatures(json_Ocean_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocean_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocean_0.addFeatures(features_Ocean_0);
var lyr_Ocean_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ocean_0, 
                style: style_Ocean_0,
                popuplayertitle: 'Ocean',
                interactive: true,
                title: '<img src="styles/legend/Ocean_0.png" /> Ocean'
            });
var format_Landforms_1 = new ol.format.GeoJSON();
var features_Landforms_1 = format_Landforms_1.readFeatures(json_Landforms_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landforms_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landforms_1.addFeatures(features_Landforms_1);
var lyr_Landforms_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landforms_1, 
                style: style_Landforms_1,
                popuplayertitle: 'Landforms',
                interactive: true,
                title: '<img src="styles/legend/Landforms_1.png" /> Landforms'
            });
var format_Forests_2 = new ol.format.GeoJSON();
var features_Forests_2 = format_Forests_2.readFeatures(json_Forests_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forests_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forests_2.addFeatures(features_Forests_2);
var lyr_Forests_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forests_2, 
                style: style_Forests_2,
                popuplayertitle: 'Forests',
                interactive: true,
                title: '<img src="styles/legend/Forests_2.png" /> Forests'
            });
var format_plains_3 = new ol.format.GeoJSON();
var features_plains_3 = format_plains_3.readFeatures(json_plains_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plains_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plains_3.addFeatures(features_plains_3);
var lyr_plains_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plains_3, 
                style: style_plains_3,
                popuplayertitle: 'plains',
                interactive: true,
                title: '<img src="styles/legend/plains_3.png" /> plains'
            });
var format_semiaridland_4 = new ol.format.GeoJSON();
var features_semiaridland_4 = format_semiaridland_4.readFeatures(json_semiaridland_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_semiaridland_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_semiaridland_4.addFeatures(features_semiaridland_4);
var lyr_semiaridland_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_semiaridland_4, 
                style: style_semiaridland_4,
                popuplayertitle: 'semiaridland',
                interactive: true,
                title: '<img src="styles/legend/semiaridland_4.png" /> semiaridland'
            });
var format_Desert_5 = new ol.format.GeoJSON();
var features_Desert_5 = format_Desert_5.readFeatures(json_Desert_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desert_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desert_5.addFeatures(features_Desert_5);
var lyr_Desert_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desert_5, 
                style: style_Desert_5,
                popuplayertitle: 'Desert',
                interactive: true,
                title: '<img src="styles/legend/Desert_5.png" /> Desert'
            });
var format_DesertEscarpment_6 = new ol.format.GeoJSON();
var features_DesertEscarpment_6 = format_DesertEscarpment_6.readFeatures(json_DesertEscarpment_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesertEscarpment_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesertEscarpment_6.addFeatures(features_DesertEscarpment_6);
var lyr_DesertEscarpment_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesertEscarpment_6, 
                style: style_DesertEscarpment_6,
                popuplayertitle: 'DesertEscarpment',
                interactive: true,
                title: '<img src="styles/legend/DesertEscarpment_6.png" /> DesertEscarpment'
            });
var format_Mountains_7 = new ol.format.GeoJSON();
var features_Mountains_7 = format_Mountains_7.readFeatures(json_Mountains_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mountains_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mountains_7.addFeatures(features_Mountains_7);
var lyr_Mountains_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mountains_7, 
                style: style_Mountains_7,
                popuplayertitle: 'Mountains',
                interactive: true,
                title: '<img src="styles/legend/Mountains_7.png" /> Mountains'
            });
var format_MountainShading_8 = new ol.format.GeoJSON();
var features_MountainShading_8 = format_MountainShading_8.readFeatures(json_MountainShading_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountainShading_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountainShading_8.addFeatures(features_MountainShading_8);
var lyr_MountainShading_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountainShading_8, 
                style: style_MountainShading_8,
                popuplayertitle: 'MountainShading',
                interactive: true,
                title: '<img src="styles/legend/MountainShading_8.png" /> MountainShading'
            });
var format_Mountains2_9 = new ol.format.GeoJSON();
var features_Mountains2_9 = format_Mountains2_9.readFeatures(json_Mountains2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mountains2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mountains2_9.addFeatures(features_Mountains2_9);
var lyr_Mountains2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mountains2_9, 
                style: style_Mountains2_9,
                popuplayertitle: 'Mountains2',
                interactive: true,
                title: '<img src="styles/legend/Mountains2_9.png" /> Mountains2'
            });
var format_BoroughBorders_10 = new ol.format.GeoJSON();
var features_BoroughBorders_10 = format_BoroughBorders_10.readFeatures(json_BoroughBorders_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoroughBorders_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoroughBorders_10.addFeatures(features_BoroughBorders_10);
var lyr_BoroughBorders_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoroughBorders_10,
maxResolution:560.0893230452392,
 
                style: style_BoroughBorders_10,
                popuplayertitle: 'BoroughBorders',
                interactive: true,
                title: '<img src="styles/legend/BoroughBorders_10.png" /> BoroughBorders'
            });
var format_BoroughNames_11 = new ol.format.GeoJSON();
var features_BoroughNames_11 = format_BoroughNames_11.readFeatures(json_BoroughNames_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoroughNames_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoroughNames_11.addFeatures(features_BoroughNames_11);
var lyr_BoroughNames_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoroughNames_11,
maxResolution:280.0446615226196,
 
                style: style_BoroughNames_11,
                popuplayertitle: 'BoroughNames',
                interactive: true,
                title: 'BoroughNames'
            });
var format_Borders_12 = new ol.format.GeoJSON();
var features_Borders_12 = format_Borders_12.readFeatures(json_Borders_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Borders_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Borders_12.addFeatures(features_Borders_12);
var lyr_Borders_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Borders_12,
maxResolution:2888.7536584334475,
 
                style: style_Borders_12,
                popuplayertitle: 'Borders',
                interactive: true,
                title: '<img src="styles/legend/Borders_12.png" /> Borders'
            });
var format_WaterFeatures_13 = new ol.format.GeoJSON();
var features_WaterFeatures_13 = format_WaterFeatures_13.readFeatures(json_WaterFeatures_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterFeatures_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterFeatures_13.addFeatures(features_WaterFeatures_13);
var lyr_WaterFeatures_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterFeatures_13, 
                style: style_WaterFeatures_13,
                popuplayertitle: 'WaterFeatures',
                interactive: true,
                title: '<img src="styles/legend/WaterFeatures_13.png" /> WaterFeatures'
            });
var format_Countries_14 = new ol.format.GeoJSON();
var features_Countries_14 = format_Countries_14.readFeatures(json_Countries_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countries_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countries_14.addFeatures(features_Countries_14);
var lyr_Countries_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countries_14,
maxResolution:2520.401953703577,
 
                style: style_Countries_14,
                popuplayertitle: 'Countries',
                interactive: true,
                title: 'Countries'
            });
var format_T_15 = new ol.format.GeoJSON();
var features_T_15 = format_T_15.readFeatures(json_T_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_15.addFeatures(features_T_15);
var lyr_T_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_15,
maxResolution:1120.1786460904784,
 
                style: style_T_15,
                popuplayertitle: 'T',
                interactive: true,
                title: '<img src="styles/legend/T_15.png" /> T'
            });
var format_Tier1Cities_16 = new ol.format.GeoJSON();
var features_Tier1Cities_16 = format_Tier1Cities_16.readFeatures(json_Tier1Cities_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tier1Cities_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tier1Cities_16.addFeatures(features_Tier1Cities_16);
var lyr_Tier1Cities_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tier1Cities_16,
maxResolution:1120.1786460904784,
 
                style: style_Tier1Cities_16,
                popuplayertitle: 'Tier1Cities',
                interactive: true,
                title: '<img src="styles/legend/Tier1Cities_16.png" /> Tier1Cities'
            });
var format_DesertLabels_17 = new ol.format.GeoJSON();
var features_DesertLabels_17 = format_DesertLabels_17.readFeatures(json_DesertLabels_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesertLabels_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesertLabels_17.addFeatures(features_DesertLabels_17);
var lyr_DesertLabels_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesertLabels_17,
maxResolution:252.04019537035768,
 
                style: style_DesertLabels_17,
                popuplayertitle: 'DesertLabels',
                interactive: true,
                title: 'DesertLabels'
            });
var format_WaterLabels_18 = new ol.format.GeoJSON();
var features_WaterLabels_18 = format_WaterLabels_18.readFeatures(json_WaterLabels_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLabels_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLabels_18.addFeatures(features_WaterLabels_18);
var lyr_WaterLabels_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterLabels_18,
maxResolution:280.0446615226196,
 
                style: style_WaterLabels_18,
                popuplayertitle: 'WaterLabels',
                interactive: true,
                title: 'WaterLabels'
            });
var group_GeographicalFeatures = new ol.layer.Group({
                                layers: [lyr_DesertLabels_17,lyr_WaterLabels_18,],
                                fold: 'open',
                                title: 'Geographical Features'});
var group_Biomes = new ol.layer.Group({
                                layers: [lyr_Forests_2,lyr_plains_3,lyr_semiaridland_4,lyr_Desert_5,lyr_DesertEscarpment_6,lyr_Mountains_7,lyr_MountainShading_8,lyr_Mountains2_9,],
                                fold: 'open',
                                title: 'Biomes'});

lyr_Ocean_0.setVisible(true);lyr_Landforms_1.setVisible(true);lyr_Forests_2.setVisible(true);lyr_plains_3.setVisible(true);lyr_semiaridland_4.setVisible(true);lyr_Desert_5.setVisible(true);lyr_DesertEscarpment_6.setVisible(true);lyr_Mountains_7.setVisible(true);lyr_MountainShading_8.setVisible(true);lyr_Mountains2_9.setVisible(true);lyr_BoroughBorders_10.setVisible(true);lyr_BoroughNames_11.setVisible(true);lyr_Borders_12.setVisible(true);lyr_WaterFeatures_13.setVisible(true);lyr_Countries_14.setVisible(true);lyr_T_15.setVisible(true);lyr_Tier1Cities_16.setVisible(true);lyr_DesertLabels_17.setVisible(true);lyr_WaterLabels_18.setVisible(true);
var layersList = [lyr_Ocean_0,lyr_Landforms_1,group_Biomes,lyr_BoroughBorders_10,lyr_BoroughNames_11,lyr_Borders_12,lyr_WaterFeatures_13,lyr_Countries_14,lyr_T_15,lyr_Tier1Cities_16,group_GeographicalFeatures];
lyr_Ocean_0.set('fieldAliases', {'': '', });
lyr_Landforms_1.set('fieldAliases', {'': '', });
lyr_Forests_2.set('fieldAliases', {'id': 'id', });
lyr_plains_3.set('fieldAliases', {'id': 'id', });
lyr_semiaridland_4.set('fieldAliases', {'id': 'id', });
lyr_Desert_5.set('fieldAliases', {'id': 'id', });
lyr_DesertEscarpment_6.set('fieldAliases', {'id': 'id', });
lyr_Mountains_7.set('fieldAliases', {'id': 'id', });
lyr_MountainShading_8.set('fieldAliases', {'id': 'id', });
lyr_Mountains2_9.set('fieldAliases', {'id': 'id', });
lyr_BoroughBorders_10.set('fieldAliases', {'id': 'id', });
lyr_BoroughNames_11.set('fieldAliases', {'fid': 'fid', 'BoroughName': 'BoroughName', });
lyr_Borders_12.set('fieldAliases', {'': '', });
lyr_WaterFeatures_13.set('fieldAliases', {'id': 'id', });
lyr_Countries_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Name1': 'Name1', });
lyr_T_15.set('fieldAliases', {'fid': 'fid', 'CityName': 'CityName', });
lyr_Tier1Cities_16.set('fieldAliases', {'fid': 'fid', 'CityName': 'CityName', });
lyr_DesertLabels_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_WaterLabels_18.set('fieldAliases', {'fid': 'fid', 'WaterName': 'WaterName', });
lyr_Ocean_0.set('fieldImages', {'': '', });
lyr_Landforms_1.set('fieldImages', {'': 'TextEdit', });
lyr_Forests_2.set('fieldImages', {'id': 'TextEdit', });
lyr_plains_3.set('fieldImages', {'id': 'TextEdit', });
lyr_semiaridland_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Desert_5.set('fieldImages', {'id': 'TextEdit', });
lyr_DesertEscarpment_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Mountains_7.set('fieldImages', {'id': 'TextEdit', });
lyr_MountainShading_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Mountains2_9.set('fieldImages', {'id': 'TextEdit', });
lyr_BoroughBorders_10.set('fieldImages', {'id': 'TextEdit', });
lyr_BoroughNames_11.set('fieldImages', {'fid': 'TextEdit', 'BoroughName': 'TextEdit', });
lyr_Borders_12.set('fieldImages', {'': 'TextEdit', });
lyr_WaterFeatures_13.set('fieldImages', {'id': 'TextEdit', });
lyr_Countries_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'Range', 'Name1': 'TextEdit', });
lyr_T_15.set('fieldImages', {'fid': 'TextEdit', 'CityName': 'TextEdit', });
lyr_Tier1Cities_16.set('fieldImages', {'fid': 'TextEdit', 'CityName': 'TextEdit', });
lyr_DesertLabels_17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_WaterLabels_18.set('fieldImages', {'fid': 'TextEdit', 'WaterName': 'TextEdit', });
lyr_Ocean_0.set('fieldLabels', {});
lyr_Landforms_1.set('fieldLabels', {});
lyr_Forests_2.set('fieldLabels', {'id': 'no label', });
lyr_plains_3.set('fieldLabels', {'id': 'no label', });
lyr_semiaridland_4.set('fieldLabels', {'id': 'no label', });
lyr_Desert_5.set('fieldLabels', {'id': 'no label', });
lyr_DesertEscarpment_6.set('fieldLabels', {'id': 'no label', });
lyr_Mountains_7.set('fieldLabels', {'id': 'no label', });
lyr_MountainShading_8.set('fieldLabels', {'id': 'no label', });
lyr_Mountains2_9.set('fieldLabels', {'id': 'no label', });
lyr_BoroughBorders_10.set('fieldLabels', {'id': 'no label', });
lyr_BoroughNames_11.set('fieldLabels', {'fid': 'no label', 'BoroughName': 'no label', });
lyr_Borders_12.set('fieldLabels', {});
lyr_WaterFeatures_13.set('fieldLabels', {'id': 'no label', });
lyr_Countries_14.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', 'Name1': 'inline label - visible with data', });
lyr_T_15.set('fieldLabels', {'fid': 'no label', 'CityName': 'no label', });
lyr_Tier1Cities_16.set('fieldLabels', {'fid': 'no label', 'CityName': 'inline label - visible with data', });
lyr_DesertLabels_17.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_WaterLabels_18.set('fieldLabels', {'fid': 'no label', 'WaterName': 'no label', });
lyr_WaterLabels_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});