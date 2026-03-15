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
var format_shippinglines_1 = new ol.format.GeoJSON();
var features_shippinglines_1 = format_shippinglines_1.readFeatures(json_shippinglines_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shippinglines_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shippinglines_1.addFeatures(features_shippinglines_1);
var lyr_shippinglines_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shippinglines_1,
maxResolution:700.1116538065492,
 
                style: style_shippinglines_1,
                popuplayertitle: 'shippinglines',
                interactive: true,
                title: '<img src="styles/legend/shippinglines_1.png" /> shippinglines'
            });
var format_Landforms_2 = new ol.format.GeoJSON();
var features_Landforms_2 = format_Landforms_2.readFeatures(json_Landforms_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landforms_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landforms_2.addFeatures(features_Landforms_2);
var lyr_Landforms_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landforms_2, 
                style: style_Landforms_2,
                popuplayertitle: 'Landforms',
                interactive: true,
                title: '<img src="styles/legend/Landforms_2.png" /> Landforms'
            });
var format_Forests_3 = new ol.format.GeoJSON();
var features_Forests_3 = format_Forests_3.readFeatures(json_Forests_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forests_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forests_3.addFeatures(features_Forests_3);
var lyr_Forests_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forests_3, 
                style: style_Forests_3,
                popuplayertitle: 'Forests',
                interactive: true,
                title: '<img src="styles/legend/Forests_3.png" /> Forests'
            });
var format_plains_4 = new ol.format.GeoJSON();
var features_plains_4 = format_plains_4.readFeatures(json_plains_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plains_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plains_4.addFeatures(features_plains_4);
var lyr_plains_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_plains_4, 
                style: style_plains_4,
                popuplayertitle: 'plains',
                interactive: true,
                title: '<img src="styles/legend/plains_4.png" /> plains'
            });
var format_semiaridland_5 = new ol.format.GeoJSON();
var features_semiaridland_5 = format_semiaridland_5.readFeatures(json_semiaridland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_semiaridland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_semiaridland_5.addFeatures(features_semiaridland_5);
var lyr_semiaridland_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_semiaridland_5, 
                style: style_semiaridland_5,
                popuplayertitle: 'semiaridland',
                interactive: true,
                title: '<img src="styles/legend/semiaridland_5.png" /> semiaridland'
            });
var format_Desert_6 = new ol.format.GeoJSON();
var features_Desert_6 = format_Desert_6.readFeatures(json_Desert_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desert_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desert_6.addFeatures(features_Desert_6);
var lyr_Desert_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desert_6, 
                style: style_Desert_6,
                popuplayertitle: 'Desert',
                interactive: true,
                title: '<img src="styles/legend/Desert_6.png" /> Desert'
            });
var format_DesertEscarpment_7 = new ol.format.GeoJSON();
var features_DesertEscarpment_7 = format_DesertEscarpment_7.readFeatures(json_DesertEscarpment_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesertEscarpment_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesertEscarpment_7.addFeatures(features_DesertEscarpment_7);
var lyr_DesertEscarpment_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesertEscarpment_7, 
                style: style_DesertEscarpment_7,
                popuplayertitle: 'DesertEscarpment',
                interactive: true,
                title: '<img src="styles/legend/DesertEscarpment_7.png" /> DesertEscarpment'
            });
var format_Mountains_8 = new ol.format.GeoJSON();
var features_Mountains_8 = format_Mountains_8.readFeatures(json_Mountains_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mountains_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mountains_8.addFeatures(features_Mountains_8);
var lyr_Mountains_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mountains_8, 
                style: style_Mountains_8,
                popuplayertitle: 'Mountains',
                interactive: true,
                title: '<img src="styles/legend/Mountains_8.png" /> Mountains'
            });
var format_MountainShading_9 = new ol.format.GeoJSON();
var features_MountainShading_9 = format_MountainShading_9.readFeatures(json_MountainShading_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountainShading_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountainShading_9.addFeatures(features_MountainShading_9);
var lyr_MountainShading_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountainShading_9, 
                style: style_MountainShading_9,
                popuplayertitle: 'MountainShading',
                interactive: true,
                title: '<img src="styles/legend/MountainShading_9.png" /> MountainShading'
            });
var format_Mountains2_10 = new ol.format.GeoJSON();
var features_Mountains2_10 = format_Mountains2_10.readFeatures(json_Mountains2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mountains2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mountains2_10.addFeatures(features_Mountains2_10);
var lyr_Mountains2_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mountains2_10, 
                style: style_Mountains2_10,
                popuplayertitle: 'Mountains2',
                interactive: true,
                title: '<img src="styles/legend/Mountains2_10.png" /> Mountains2'
            });
var format_Mines_11 = new ol.format.GeoJSON();
var features_Mines_11 = format_Mines_11.readFeatures(json_Mines_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mines_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mines_11.addFeatures(features_Mines_11);
var lyr_Mines_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mines_11,
maxResolution:280.0446615226196,
 
                style: style_Mines_11,
                popuplayertitle: 'Mines',
                interactive: true,
                title: '<img src="styles/legend/Mines_11.png" /> Mines'
            });
var format_Urban_12 = new ol.format.GeoJSON();
var features_Urban_12 = format_Urban_12.readFeatures(json_Urban_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urban_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_12.addFeatures(features_Urban_12);
var lyr_Urban_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urban_12,
maxResolution:254.1746957804831,
 
                style: style_Urban_12,
                popuplayertitle: 'Urban',
                interactive: true,
                title: '<img src="styles/legend/Urban_12.png" /> Urban'
            });
var format_SmallUrban_13 = new ol.format.GeoJSON();
var features_SmallUrban_13 = format_SmallUrban_13.readFeatures(json_SmallUrban_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmallUrban_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmallUrban_13.addFeatures(features_SmallUrban_13);
var lyr_SmallUrban_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmallUrban_13,
maxResolution:196.03126306583374,
 
                style: style_SmallUrban_13,
                popuplayertitle: 'SmallUrban',
                interactive: true,
                title: '<img src="styles/legend/SmallUrban_13.png" /> SmallUrban'
            });
var format_BoroughBorders_14 = new ol.format.GeoJSON();
var features_BoroughBorders_14 = format_BoroughBorders_14.readFeatures(json_BoroughBorders_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoroughBorders_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoroughBorders_14.addFeatures(features_BoroughBorders_14);
var lyr_BoroughBorders_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoroughBorders_14,
maxResolution:840.1339845678589,
 
                style: style_BoroughBorders_14,
                popuplayertitle: 'BoroughBorders',
                interactive: true,
                title: '<img src="styles/legend/BoroughBorders_14.png" /> BoroughBorders'
            });
var format_BoroughNames_15 = new ol.format.GeoJSON();
var features_BoroughNames_15 = format_BoroughNames_15.readFeatures(json_BoroughNames_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoroughNames_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoroughNames_15.addFeatures(features_BoroughNames_15);
var lyr_BoroughNames_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoroughNames_15,
maxResolution:616.0982553497632,
 
                style: style_BoroughNames_15,
                popuplayertitle: 'BoroughNames',
                interactive: true,
                title: 'BoroughNames'
            });
var format_Borders_16 = new ol.format.GeoJSON();
var features_Borders_16 = format_Borders_16.readFeatures(json_Borders_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Borders_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Borders_16.addFeatures(features_Borders_16);
var lyr_Borders_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Borders_16,
maxResolution:2888.7536584334475,
 
                style: style_Borders_16,
                popuplayertitle: 'Borders',
                interactive: true,
                title: '<img src="styles/legend/Borders_16.png" /> Borders'
            });
var format_MajorRoads_17 = new ol.format.GeoJSON();
var features_MajorRoads_17 = format_MajorRoads_17.readFeatures(json_MajorRoads_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoads_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoads_17.addFeatures(features_MajorRoads_17);
var lyr_MajorRoads_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorRoads_17,
maxResolution:560.0893230452392,
 
                style: style_MajorRoads_17,
                popuplayertitle: 'MajorRoads',
                interactive: true,
                title: '<img src="styles/legend/MajorRoads_17.png" /> MajorRoads'
            });
var format_Roads_18 = new ol.format.GeoJSON();
var features_Roads_18 = format_Roads_18.readFeatures(json_Roads_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_18.addFeatures(features_Roads_18);
var lyr_Roads_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_18,
maxResolution:560.0893230452392,
 
                style: style_Roads_18,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_18.png" /> Roads'
            });
var format_ocatianhighwaylabels_19 = new ol.format.GeoJSON();
var features_ocatianhighwaylabels_19 = format_ocatianhighwaylabels_19.readFeatures(json_ocatianhighwaylabels_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ocatianhighwaylabels_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ocatianhighwaylabels_19.addFeatures(features_ocatianhighwaylabels_19);
var lyr_ocatianhighwaylabels_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ocatianhighwaylabels_19,
maxResolution:560.0893230452392,
 
                style: style_ocatianhighwaylabels_19,
                popuplayertitle: 'ocatianhighwaylabels',
                interactive: true,
                title: '<img src="styles/legend/ocatianhighwaylabels_19.png" /> ocatianhighwaylabels'
            });
var format_c_20 = new ol.format.GeoJSON();
var features_c_20 = format_c_20.readFeatures(json_c_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_20.addFeatures(features_c_20);
var lyr_c_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_c_20,
maxResolution:560.0893230452392,
 
                style: style_c_20,
                popuplayertitle: 'c',
                interactive: true,
                title: '<img src="styles/legend/c_20.png" /> c'
            });
var format_MinorRoads_21 = new ol.format.GeoJSON();
var features_MinorRoads_21 = format_MinorRoads_21.readFeatures(json_MinorRoads_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MinorRoads_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinorRoads_21.addFeatures(features_MinorRoads_21);
var lyr_MinorRoads_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinorRoads_21,
maxResolution:196.03126306583374,
 
                style: style_MinorRoads_21,
                popuplayertitle: 'MinorRoads',
                interactive: true,
                title: '<img src="styles/legend/MinorRoads_21.png" /> MinorRoads'
            });
var format_WaterFeatures_22 = new ol.format.GeoJSON();
var features_WaterFeatures_22 = format_WaterFeatures_22.readFeatures(json_WaterFeatures_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterFeatures_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterFeatures_22.addFeatures(features_WaterFeatures_22);
var lyr_WaterFeatures_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterFeatures_22, 
                style: style_WaterFeatures_22,
                popuplayertitle: 'WaterFeatures',
                interactive: true,
                title: '<img src="styles/legend/WaterFeatures_22.png" /> WaterFeatures'
            });
var format_Countries_23 = new ol.format.GeoJSON();
var features_Countries_23 = format_Countries_23.readFeatures(json_Countries_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countries_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countries_23.addFeatures(features_Countries_23);
var lyr_Countries_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countries_23,
maxResolution:2520.401953703577,
 
                style: style_Countries_23,
                popuplayertitle: 'Countries',
                interactive: true,
                title: 'Countries'
            });
var format_Tier2Cities_24 = new ol.format.GeoJSON();
var features_Tier2Cities_24 = format_Tier2Cities_24.readFeatures(json_Tier2Cities_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tier2Cities_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tier2Cities_24.addFeatures(features_Tier2Cities_24);
var lyr_Tier2Cities_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tier2Cities_24,
maxResolution:1120.1786460904784,
 
                style: style_Tier2Cities_24,
                popuplayertitle: 'Tier2Cities',
                interactive: true,
                title: '<img src="styles/legend/Tier2Cities_24.png" /> Tier2Cities'
            });
var format_Tier1Cities_25 = new ol.format.GeoJSON();
var features_Tier1Cities_25 = format_Tier1Cities_25.readFeatures(json_Tier1Cities_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tier1Cities_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tier1Cities_25.addFeatures(features_Tier1Cities_25);
var lyr_Tier1Cities_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tier1Cities_25,
maxResolution:1120.1786460904784,
 
                style: style_Tier1Cities_25,
                popuplayertitle: 'Tier1Cities',
                interactive: true,
                title: '<img src="styles/legend/Tier1Cities_25.png" /> Tier1Cities'
            });
var format_Tier3Cities_26 = new ol.format.GeoJSON();
var features_Tier3Cities_26 = format_Tier3Cities_26.readFeatures(json_Tier3Cities_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tier3Cities_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tier3Cities_26.addFeatures(features_Tier3Cities_26);
var lyr_Tier3Cities_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tier3Cities_26,
maxResolution:451.02396930262444,
 
                style: style_Tier3Cities_26,
                popuplayertitle: 'Tier3Cities',
                interactive: true,
                title: '<img src="styles/legend/Tier3Cities_26.png" /> Tier3Cities'
            });
var format_T_27 = new ol.format.GeoJSON();
var features_T_27 = format_T_27.readFeatures(json_T_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_27.addFeatures(features_T_27);
var lyr_T_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_27,
maxResolution:252.04019537035768,
 
                style: style_T_27,
                popuplayertitle: 'T',
                interactive: true,
                title: '<img src="styles/legend/T_27.png" /> T'
            });
var format_DesertLabels_28 = new ol.format.GeoJSON();
var features_DesertLabels_28 = format_DesertLabels_28.readFeatures(json_DesertLabels_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesertLabels_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesertLabels_28.addFeatures(features_DesertLabels_28);
var lyr_DesertLabels_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesertLabels_28,
maxResolution:252.04019537035768,
 
                style: style_DesertLabels_28,
                popuplayertitle: 'DesertLabels',
                interactive: true,
                title: 'DesertLabels'
            });
var format_WaterLabels_29 = new ol.format.GeoJSON();
var features_WaterLabels_29 = format_WaterLabels_29.readFeatures(json_WaterLabels_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLabels_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLabels_29.addFeatures(features_WaterLabels_29);
var lyr_WaterLabels_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterLabels_29,
maxResolution:280.0446615226196,
 
                style: style_WaterLabels_29,
                popuplayertitle: 'WaterLabels',
                interactive: true,
                title: 'WaterLabels'
            });
var format_IslandLabels_30 = new ol.format.GeoJSON();
var features_IslandLabels_30 = format_IslandLabels_30.readFeatures(json_IslandLabels_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IslandLabels_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IslandLabels_30.addFeatures(features_IslandLabels_30);
var lyr_IslandLabels_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IslandLabels_30,
maxResolution:290.3424638161294,
 
                style: style_IslandLabels_30,
                popuplayertitle: 'IslandLabels',
                interactive: true,
                title: '<img src="styles/legend/IslandLabels_30.png" /> IslandLabels'
            });
var format_ForestLabel_31 = new ol.format.GeoJSON();
var features_ForestLabel_31 = format_ForestLabel_31.readFeatures(json_ForestLabel_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForestLabel_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestLabel_31.addFeatures(features_ForestLabel_31);
var lyr_ForestLabel_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForestLabel_31,
maxResolution:688.0590916639386,
 
                style: style_ForestLabel_31,
                popuplayertitle: 'ForestLabel',
                interactive: true,
                title: '<img src="styles/legend/ForestLabel_31.png" /> ForestLabel'
            });
var format_Equator_32 = new ol.format.GeoJSON();
var features_Equator_32 = format_Equator_32.readFeatures(json_Equator_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equator_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equator_32.addFeatures(features_Equator_32);
var lyr_Equator_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equator_32,
maxResolution:28004.466152261964,
 minResolution:1511.8432287581225,

                style: style_Equator_32,
                popuplayertitle: 'Equator',
                interactive: true,
                title: '<img src="styles/legend/Equator_32.png" /> Equator'
            });
var group_GeographicalFeatures = new ol.layer.Group({
                                layers: [lyr_DesertLabels_28,lyr_WaterLabels_29,lyr_IslandLabels_30,lyr_ForestLabel_31,],
                                fold: 'open',
                                title: 'Geographical Features'});
var group_Lines = new ol.layer.Group({
                                layers: [lyr_BoroughBorders_14,lyr_BoroughNames_15,lyr_Borders_16,lyr_MajorRoads_17,lyr_Roads_18,lyr_ocatianhighwaylabels_19,lyr_c_20,lyr_MinorRoads_21,],
                                fold: 'open',
                                title: 'Lines'});
var group_Biomes = new ol.layer.Group({
                                layers: [lyr_Forests_3,lyr_plains_4,lyr_semiaridland_5,lyr_Desert_6,lyr_DesertEscarpment_7,lyr_Mountains_8,lyr_MountainShading_9,lyr_Mountains2_10,lyr_Mines_11,lyr_Urban_12,lyr_SmallUrban_13,],
                                fold: 'open',
                                title: 'Biomes'});

lyr_Ocean_0.setVisible(true);lyr_shippinglines_1.setVisible(true);lyr_Landforms_2.setVisible(true);lyr_Forests_3.setVisible(true);lyr_plains_4.setVisible(true);lyr_semiaridland_5.setVisible(true);lyr_Desert_6.setVisible(true);lyr_DesertEscarpment_7.setVisible(true);lyr_Mountains_8.setVisible(true);lyr_MountainShading_9.setVisible(true);lyr_Mountains2_10.setVisible(true);lyr_Mines_11.setVisible(true);lyr_Urban_12.setVisible(true);lyr_SmallUrban_13.setVisible(true);lyr_BoroughBorders_14.setVisible(true);lyr_BoroughNames_15.setVisible(true);lyr_Borders_16.setVisible(true);lyr_MajorRoads_17.setVisible(true);lyr_Roads_18.setVisible(true);lyr_ocatianhighwaylabels_19.setVisible(true);lyr_c_20.setVisible(true);lyr_MinorRoads_21.setVisible(true);lyr_WaterFeatures_22.setVisible(true);lyr_Countries_23.setVisible(true);lyr_Tier2Cities_24.setVisible(true);lyr_Tier1Cities_25.setVisible(true);lyr_Tier3Cities_26.setVisible(true);lyr_T_27.setVisible(true);lyr_DesertLabels_28.setVisible(true);lyr_WaterLabels_29.setVisible(true);lyr_IslandLabels_30.setVisible(true);lyr_ForestLabel_31.setVisible(true);lyr_Equator_32.setVisible(true);
var layersList = [lyr_Ocean_0,lyr_shippinglines_1,lyr_Landforms_2,group_Biomes,group_Lines,lyr_WaterFeatures_22,lyr_Countries_23,lyr_Tier2Cities_24,lyr_Tier1Cities_25,lyr_Tier3Cities_26,lyr_T_27,group_GeographicalFeatures,lyr_Equator_32];
lyr_Ocean_0.set('fieldAliases', {'': '', });
lyr_shippinglines_1.set('fieldAliases', {'id': 'id', });
lyr_Landforms_2.set('fieldAliases', {'': '', });
lyr_Forests_3.set('fieldAliases', {'id': 'id', });
lyr_plains_4.set('fieldAliases', {'id': 'id', });
lyr_semiaridland_5.set('fieldAliases', {'id': 'id', });
lyr_Desert_6.set('fieldAliases', {'id': 'id', });
lyr_DesertEscarpment_7.set('fieldAliases', {'id': 'id', });
lyr_Mountains_8.set('fieldAliases', {'id': 'id', });
lyr_MountainShading_9.set('fieldAliases', {'id': 'id', });
lyr_Mountains2_10.set('fieldAliases', {'id': 'id', });
lyr_Mines_11.set('fieldAliases', {'id': 'id', 'Mine': 'Mine', });
lyr_Urban_12.set('fieldAliases', {'id': 'id', });
lyr_SmallUrban_13.set('fieldAliases', {'id': 'id', });
lyr_BoroughBorders_14.set('fieldAliases', {'id': 'id', });
lyr_BoroughNames_15.set('fieldAliases', {'fid': 'fid', 'BoroughName': 'BoroughName', });
lyr_Borders_16.set('fieldAliases', {'': '', });
lyr_MajorRoads_17.set('fieldAliases', {'id': 'id', });
lyr_Roads_18.set('fieldAliases', {'id': 'id', });
lyr_ocatianhighwaylabels_19.set('fieldAliases', {'fid': 'fid', 'Road': 'Road', });
lyr_c_20.set('fieldAliases', {'fid': 'fid', 'hname': 'hname', });
lyr_MinorRoads_21.set('fieldAliases', {'id': 'id', });
lyr_WaterFeatures_22.set('fieldAliases', {'id': 'id', });
lyr_Countries_23.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Name1': 'Name1', });
lyr_Tier2Cities_24.set('fieldAliases', {'fid': 'fid', 'CityName': 'CityName', });
lyr_Tier1Cities_25.set('fieldAliases', {'fid': 'fid', 'CityName': 'CityName', });
lyr_Tier3Cities_26.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_T_27.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_DesertLabels_28.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_WaterLabels_29.set('fieldAliases', {'fid': 'fid', 'WaterName': 'WaterName', });
lyr_IslandLabels_30.set('fieldAliases', {'fid': 'fid', 'Island': 'Island', });
lyr_ForestLabel_31.set('fieldAliases', {'fid': 'fid', 'Forest': 'Forest', });
lyr_Equator_32.set('fieldAliases', {'id': 'id', });
lyr_Ocean_0.set('fieldImages', {'': '', });
lyr_shippinglines_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Landforms_2.set('fieldImages', {'': 'TextEdit', });
lyr_Forests_3.set('fieldImages', {'id': 'TextEdit', });
lyr_plains_4.set('fieldImages', {'id': 'TextEdit', });
lyr_semiaridland_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Desert_6.set('fieldImages', {'id': 'TextEdit', });
lyr_DesertEscarpment_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Mountains_8.set('fieldImages', {'id': 'TextEdit', });
lyr_MountainShading_9.set('fieldImages', {'id': 'TextEdit', });
lyr_Mountains2_10.set('fieldImages', {'id': 'TextEdit', });
lyr_Mines_11.set('fieldImages', {'id': 'TextEdit', 'Mine': 'TextEdit', });
lyr_Urban_12.set('fieldImages', {'id': 'TextEdit', });
lyr_SmallUrban_13.set('fieldImages', {'id': 'TextEdit', });
lyr_BoroughBorders_14.set('fieldImages', {'id': 'TextEdit', });
lyr_BoroughNames_15.set('fieldImages', {'fid': 'TextEdit', 'BoroughName': 'TextEdit', });
lyr_Borders_16.set('fieldImages', {'': 'TextEdit', });
lyr_MajorRoads_17.set('fieldImages', {'id': 'TextEdit', });
lyr_Roads_18.set('fieldImages', {'id': 'TextEdit', });
lyr_ocatianhighwaylabels_19.set('fieldImages', {'fid': 'TextEdit', 'Road': 'TextEdit', });
lyr_c_20.set('fieldImages', {'fid': 'TextEdit', 'hname': 'TextEdit', });
lyr_MinorRoads_21.set('fieldImages', {'id': 'TextEdit', });
lyr_WaterFeatures_22.set('fieldImages', {'id': 'TextEdit', });
lyr_Countries_23.set('fieldImages', {'id': 'TextEdit', 'Name': 'Range', 'Name1': 'TextEdit', });
lyr_Tier2Cities_24.set('fieldImages', {'fid': 'TextEdit', 'CityName': 'TextEdit', });
lyr_Tier1Cities_25.set('fieldImages', {'fid': 'TextEdit', 'CityName': 'TextEdit', });
lyr_Tier3Cities_26.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_T_27.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_DesertLabels_28.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_WaterLabels_29.set('fieldImages', {'fid': 'TextEdit', 'WaterName': 'TextEdit', });
lyr_IslandLabels_30.set('fieldImages', {'fid': 'TextEdit', 'Island': 'TextEdit', });
lyr_ForestLabel_31.set('fieldImages', {'fid': 'TextEdit', 'Forest': 'TextEdit', });
lyr_Equator_32.set('fieldImages', {'id': 'TextEdit', });
lyr_Ocean_0.set('fieldLabels', {});
lyr_shippinglines_1.set('fieldLabels', {'id': 'no label', });
lyr_Landforms_2.set('fieldLabels', {});
lyr_Forests_3.set('fieldLabels', {'id': 'no label', });
lyr_plains_4.set('fieldLabels', {'id': 'no label', });
lyr_semiaridland_5.set('fieldLabels', {'id': 'no label', });
lyr_Desert_6.set('fieldLabels', {'id': 'no label', });
lyr_DesertEscarpment_7.set('fieldLabels', {'id': 'no label', });
lyr_Mountains_8.set('fieldLabels', {'id': 'no label', });
lyr_MountainShading_9.set('fieldLabels', {'id': 'no label', });
lyr_Mountains2_10.set('fieldLabels', {'id': 'no label', });
lyr_Mines_11.set('fieldLabels', {'id': 'no label', 'Mine': 'no label', });
lyr_Urban_12.set('fieldLabels', {'id': 'no label', });
lyr_SmallUrban_13.set('fieldLabels', {'id': 'no label', });
lyr_BoroughBorders_14.set('fieldLabels', {'id': 'no label', });
lyr_BoroughNames_15.set('fieldLabels', {'fid': 'no label', 'BoroughName': 'no label', });
lyr_Borders_16.set('fieldLabels', {});
lyr_MajorRoads_17.set('fieldLabels', {'id': 'no label', });
lyr_Roads_18.set('fieldLabels', {'id': 'no label', });
lyr_ocatianhighwaylabels_19.set('fieldLabels', {'fid': 'no label', 'Road': 'no label', });
lyr_c_20.set('fieldLabels', {'fid': 'no label', 'hname': 'no label', });
lyr_MinorRoads_21.set('fieldLabels', {'id': 'no label', });
lyr_WaterFeatures_22.set('fieldLabels', {'id': 'no label', });
lyr_Countries_23.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', 'Name1': 'inline label - visible with data', });
lyr_Tier2Cities_24.set('fieldLabels', {'fid': 'no label', 'CityName': 'no label', });
lyr_Tier1Cities_25.set('fieldLabels', {'fid': 'no label', 'CityName': 'inline label - visible with data', });
lyr_Tier3Cities_26.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_T_27.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_DesertLabels_28.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_WaterLabels_29.set('fieldLabels', {'fid': 'no label', 'WaterName': 'no label', });
lyr_IslandLabels_30.set('fieldLabels', {'fid': 'no label', 'Island': 'no label', });
lyr_ForestLabel_31.set('fieldLabels', {'fid': 'no label', 'Forest': 'no label', });
lyr_Equator_32.set('fieldLabels', {'id': 'no label', });
lyr_Equator_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});