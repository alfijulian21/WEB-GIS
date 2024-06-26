var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KabLampungSelatan_2 = new ol.format.GeoJSON();
var features_KabLampungSelatan_2 = format_KabLampungSelatan_2.readFeatures(json_KabLampungSelatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabLampungSelatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabLampungSelatan_2.addFeatures(features_KabLampungSelatan_2);
var lyr_KabLampungSelatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabLampungSelatan_2, 
                style: style_KabLampungSelatan_2,
                popuplayertitle: "Kab. Lampung Selatan",
                interactive: true,
                title: '<img src="styles/legend/KabLampungSelatan_2.png" /> Kab. Lampung Selatan'
            });
var format_KabTanggamus_3 = new ol.format.GeoJSON();
var features_KabTanggamus_3 = format_KabTanggamus_3.readFeatures(json_KabTanggamus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabTanggamus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabTanggamus_3.addFeatures(features_KabTanggamus_3);
var lyr_KabTanggamus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabTanggamus_3, 
                style: style_KabTanggamus_3,
                popuplayertitle: "Kab. Tanggamus",
                interactive: true,
                title: '<img src="styles/legend/KabTanggamus_3.png" /> Kab. Tanggamus'
            });
var format_KabPesawaran_4 = new ol.format.GeoJSON();
var features_KabPesawaran_4 = format_KabPesawaran_4.readFeatures(json_KabPesawaran_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabPesawaran_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabPesawaran_4.addFeatures(features_KabPesawaran_4);
var lyr_KabPesawaran_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabPesawaran_4, 
                style: style_KabPesawaran_4,
                popuplayertitle: "Kab. Pesawaran",
                interactive: true,
                title: '<img src="styles/legend/KabPesawaran_4.png" /> Kab. Pesawaran'
            });
var format_KotaBandarLampung_5 = new ol.format.GeoJSON();
var features_KotaBandarLampung_5 = format_KotaBandarLampung_5.readFeatures(json_KotaBandarLampung_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBandarLampung_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBandarLampung_5.addFeatures(features_KotaBandarLampung_5);
var lyr_KotaBandarLampung_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBandarLampung_5, 
                style: style_KotaBandarLampung_5,
                popuplayertitle: "Kota Bandar Lampung",
                interactive: true,
                title: '<img src="styles/legend/KotaBandarLampung_5.png" /> Kota Bandar Lampung'
            });
var format_DaerahTsunami_TelukLampung_6 = new ol.format.GeoJSON();
var features_DaerahTsunami_TelukLampung_6 = format_DaerahTsunami_TelukLampung_6.readFeatures(json_DaerahTsunami_TelukLampung_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaerahTsunami_TelukLampung_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahTsunami_TelukLampung_6.addFeatures(features_DaerahTsunami_TelukLampung_6);
var lyr_DaerahTsunami_TelukLampung_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaerahTsunami_TelukLampung_6, 
                style: style_DaerahTsunami_TelukLampung_6,
                popuplayertitle: "Daerah Tsunami_Teluk Lampung",
                interactive: true,
    title: 'Daerah Tsunami_Teluk Lampung<br />\
    <img src="styles/legend/DaerahTsunami_TelukLampung_6_0.png" /> KRB Tsunami Menengah<br />\
    <img src="styles/legend/DaerahTsunami_TelukLampung_6_1.png" /> KRB Tsunami Rendah<br />\
    <img src="styles/legend/DaerahTsunami_TelukLampung_6_2.png" /> KRB Tsunami Tinggi<br />\
    <img src="styles/legend/DaerahTsunami_TelukLampung_6_3.png" /> <br />'
        });
var format_JALAN_Tanggamus_7 = new ol.format.GeoJSON();
var features_JALAN_Tanggamus_7 = format_JALAN_Tanggamus_7.readFeatures(json_JALAN_Tanggamus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_Tanggamus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_Tanggamus_7.addFeatures(features_JALAN_Tanggamus_7);
var lyr_JALAN_Tanggamus_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_Tanggamus_7, 
                style: style_JALAN_Tanggamus_7,
                popuplayertitle: "JALAN_Tanggamus",
                interactive: true,
                title: '<img src="styles/legend/JALAN_Tanggamus_7.png" /> JALAN_Tanggamus'
            });
var format_JALAN_LampungSelatan_8 = new ol.format.GeoJSON();
var features_JALAN_LampungSelatan_8 = format_JALAN_LampungSelatan_8.readFeatures(json_JALAN_LampungSelatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LampungSelatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LampungSelatan_8.addFeatures(features_JALAN_LampungSelatan_8);
var lyr_JALAN_LampungSelatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LampungSelatan_8, 
                style: style_JALAN_LampungSelatan_8,
                popuplayertitle: "JALAN_Lampung Selatan",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LampungSelatan_8.png" /> JALAN_Lampung Selatan'
            });
var format_JALAN_Pesawaran_9 = new ol.format.GeoJSON();
var features_JALAN_Pesawaran_9 = format_JALAN_Pesawaran_9.readFeatures(json_JALAN_Pesawaran_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_Pesawaran_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_Pesawaran_9.addFeatures(features_JALAN_Pesawaran_9);
var lyr_JALAN_Pesawaran_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_Pesawaran_9, 
                style: style_JALAN_Pesawaran_9,
                popuplayertitle: "JALAN_Pesawaran",
                interactive: true,
                title: '<img src="styles/legend/JALAN_Pesawaran_9.png" /> JALAN_Pesawaran'
            });
var format_JALAN_Bandarlampung_10 = new ol.format.GeoJSON();
var features_JALAN_Bandarlampung_10 = format_JALAN_Bandarlampung_10.readFeatures(json_JALAN_Bandarlampung_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_Bandarlampung_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_Bandarlampung_10.addFeatures(features_JALAN_Bandarlampung_10);
var lyr_JALAN_Bandarlampung_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_Bandarlampung_10, 
                style: style_JALAN_Bandarlampung_10,
                popuplayertitle: "JALAN_Bandar lampung",
                interactive: true,
                title: '<img src="styles/legend/JALAN_Bandarlampung_10.png" /> JALAN_Bandar lampung'
            });
var format_Gempa416SR_11 = new ol.format.GeoJSON();
var features_Gempa416SR_11 = format_Gempa416SR_11.readFeatures(json_Gempa416SR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gempa416SR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gempa416SR_11.addFeatures(features_Gempa416SR_11);
var lyr_Gempa416SR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gempa416SR_11, 
                style: style_Gempa416SR_11,
                popuplayertitle: "Gempa (4.1 - 6 SR)",
                interactive: true,
                title: '<img src="styles/legend/Gempa416SR_11.png" /> Gempa (4.1 - 6 SR)'
            });
var format_Gempa6110SR_12 = new ol.format.GeoJSON();
var features_Gempa6110SR_12 = format_Gempa6110SR_12.readFeatures(json_Gempa6110SR_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gempa6110SR_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gempa6110SR_12.addFeatures(features_Gempa6110SR_12);
var lyr_Gempa6110SR_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gempa6110SR_12, 
                style: style_Gempa6110SR_12,
                popuplayertitle: "Gempa (6.1 - 10 SR)",
                interactive: true,
                title: '<img src="styles/legend/Gempa6110SR_12.png" /> Gempa (6.1 - 10 SR)'
            });
var format_Gempa014SR_13 = new ol.format.GeoJSON();
var features_Gempa014SR_13 = format_Gempa014SR_13.readFeatures(json_Gempa014SR_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gempa014SR_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gempa014SR_13.addFeatures(features_Gempa014SR_13);
var lyr_Gempa014SR_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gempa014SR_13, 
                style: style_Gempa014SR_13,
                popuplayertitle: "Gempa (0,1 - 4 SR)",
                interactive: true,
                title: '<img src="styles/legend/Gempa014SR_13.png" /> Gempa (0,1 - 4 SR)'
            });
var format_TitikTsunami_14 = new ol.format.GeoJSON();
var features_TitikTsunami_14 = format_TitikTsunami_14.readFeatures(json_TitikTsunami_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTsunami_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTsunami_14.addFeatures(features_TitikTsunami_14);cluster_TitikTsunami_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TitikTsunami_14
});
var lyr_TitikTsunami_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TitikTsunami_14, 
                style: style_TitikTsunami_14,
                popuplayertitle: "Titik Tsunami",
                interactive: true,
                title: '<img src="styles/legend/TitikTsunami_14.png" /> Titik Tsunami'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_KabLampungSelatan_2.setVisible(true);lyr_KabTanggamus_3.setVisible(true);lyr_KabPesawaran_4.setVisible(true);lyr_KotaBandarLampung_5.setVisible(true);lyr_DaerahTsunami_TelukLampung_6.setVisible(true);lyr_JALAN_Tanggamus_7.setVisible(true);lyr_JALAN_LampungSelatan_8.setVisible(true);lyr_JALAN_Pesawaran_9.setVisible(true);lyr_JALAN_Bandarlampung_10.setVisible(true);lyr_Gempa416SR_11.setVisible(true);lyr_Gempa6110SR_12.setVisible(true);lyr_Gempa014SR_13.setVisible(true);lyr_TitikTsunami_14.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_KabLampungSelatan_2,lyr_KabTanggamus_3,lyr_KabPesawaran_4,lyr_KotaBandarLampung_5,lyr_DaerahTsunami_TelukLampung_6,lyr_JALAN_Tanggamus_7,lyr_JALAN_LampungSelatan_8,lyr_JALAN_Pesawaran_9,lyr_JALAN_Bandarlampung_10,lyr_Gempa416SR_11,lyr_Gempa6110SR_12,lyr_Gempa014SR_13,lyr_TitikTsunami_14];
lyr_KabLampungSelatan_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KabTanggamus_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KabPesawaran_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KotaBandarLampung_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DaerahTsunami_TelukLampung_6.set('fieldAliases', {'ID': 'ID', 'UNSUR': 'UNSUR', 'KETERANGAN': 'KETERANGAN', 'TAHUN': 'TAHUN', 'WILAYAH': 'WILAYAH', 'LCODE': 'LCODE', 'FCODE': 'FCODE', });
lyr_JALAN_Tanggamus_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LampungSelatan_8.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_Pesawaran_9.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_Bandarlampung_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Gempa416SR_11.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontalError': 'horizontalError', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSource': 'locationSource', 'magSource': 'magSource', });
lyr_Gempa6110SR_12.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontalError': 'horizontalError', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSource': 'locationSource', 'magSource': 'magSource', });
lyr_Gempa014SR_13.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontalError': 'horizontalError', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSource': 'locationSource', 'magSource': 'magSource', });
lyr_TitikTsunami_14.set('fieldAliases', {'field_1': 'field_1', 'Unnamed: 0': 'Unnamed: 0', 'ID': 'ID', 'YEAR': 'YEAR', 'MONTH': 'MONTH', 'DAY': 'DAY', 'HOUR': 'HOUR', 'MINUTE': 'MINUTE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'LOCATION_NAME': 'LOCATION_NAME', 'COUNTRY': 'COUNTRY', 'REGION': 'REGION', 'CAUSE': 'CAUSE', 'EVENT_VALIDITY': 'EVENT_VALIDITY', 'EQ_MAGNITUDE': 'EQ_MAGNITUDE', 'EQ_DEPTH': 'EQ_DEPTH', 'TS_INTENSITY': 'TS_INTENSITY', 'DAMAGE_TOTAL_DESCRIPTION': 'DAMAGE_TOTAL_DESCRIPTION', 'HOUSES_TOTAL_DESCRIPTION': 'HOUSES_TOTAL_DESCRIPTION', 'DEATHS_TOTAL_DESCRIPTION': 'DEATHS_TOTAL_DESCRIPTION', 'URL': 'URL', 'COMMENTS': 'COMMENTS', });
lyr_KabLampungSelatan_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KabTanggamus_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KabPesawaran_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KotaBandarLampung_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DaerahTsunami_TelukLampung_6.set('fieldImages', {'ID': 'Range', 'UNSUR': 'TextEdit', 'KETERANGAN': 'TextEdit', 'TAHUN': 'Range', 'WILAYAH': 'TextEdit', 'LCODE': 'TextEdit', 'FCODE': 'TextEdit', });
lyr_JALAN_Tanggamus_7.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LampungSelatan_8.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_Pesawaran_9.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_Bandarlampung_10.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Gempa416SR_11.set('fieldImages', {'time': 'DateTime', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'Range', 'gap': 'TextEdit', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'DateTime', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontalError': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'Range', 'status': 'TextEdit', 'locationSource': 'TextEdit', 'magSource': 'TextEdit', });
lyr_Gempa6110SR_12.set('fieldImages', {'time': 'DateTime', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'Range', 'gap': 'TextEdit', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'DateTime', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontalError': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'TextEdit', 'status': 'TextEdit', 'locationSource': 'TextEdit', 'magSource': 'TextEdit', });
lyr_Gempa014SR_13.set('fieldImages', {'time': 'DateTime', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'Range', 'gap': 'TextEdit', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'DateTime', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontalError': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'Range', 'status': 'TextEdit', 'locationSource': 'TextEdit', 'magSource': 'TextEdit', });
lyr_TitikTsunami_14.set('fieldImages', {'field_1': 'Range', 'Unnamed: 0': 'Range', 'ID': 'Range', 'YEAR': 'Range', 'MONTH': 'TextEdit', 'DAY': 'TextEdit', 'HOUR': 'TextEdit', 'MINUTE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LOCATION_NAME': 'TextEdit', 'COUNTRY': 'TextEdit', 'REGION': 'TextEdit', 'CAUSE': 'TextEdit', 'EVENT_VALIDITY': 'TextEdit', 'EQ_MAGNITUDE': 'TextEdit', 'EQ_DEPTH': 'TextEdit', 'TS_INTENSITY': 'TextEdit', 'DAMAGE_TOTAL_DESCRIPTION': 'TextEdit', 'HOUSES_TOTAL_DESCRIPTION': 'TextEdit', 'DEATHS_TOTAL_DESCRIPTION': 'TextEdit', 'URL': 'TextEdit', 'COMMENTS': 'TextEdit', });
lyr_KabLampungSelatan_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KabTanggamus_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KabPesawaran_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KotaBandarLampung_5.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DaerahTsunami_TelukLampung_6.set('fieldLabels', {'ID': 'no label', 'UNSUR': 'no label', 'KETERANGAN': 'no label', 'TAHUN': 'no label', 'WILAYAH': 'no label', 'LCODE': 'no label', 'FCODE': 'no label', });
lyr_JALAN_Tanggamus_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LampungSelatan_8.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_Pesawaran_9.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_Bandarlampung_10.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Gempa416SR_11.set('fieldLabels', {'time': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'depth': 'no label', 'mag': 'no label', 'magType': 'no label', 'nst': 'no label', 'gap': 'no label', 'dmin': 'no label', 'rms': 'no label', 'net': 'no label', 'id': 'no label', 'updated': 'no label', 'place': 'no label', 'type': 'no label', 'horizontalError': 'no label', 'depthError': 'no label', 'magError': 'no label', 'magNst': 'no label', 'status': 'no label', 'locationSource': 'no label', 'magSource': 'no label', });
lyr_Gempa6110SR_12.set('fieldLabels', {'time': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'depth': 'no label', 'mag': 'no label', 'magType': 'no label', 'nst': 'no label', 'gap': 'no label', 'dmin': 'no label', 'rms': 'no label', 'net': 'no label', 'id': 'no label', 'updated': 'no label', 'place': 'no label', 'type': 'no label', 'horizontalError': 'no label', 'depthError': 'no label', 'magError': 'no label', 'magNst': 'no label', 'status': 'no label', 'locationSource': 'no label', 'magSource': 'no label', });
lyr_Gempa014SR_13.set('fieldLabels', {'time': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'depth': 'no label', 'mag': 'no label', 'magType': 'no label', 'nst': 'no label', 'gap': 'no label', 'dmin': 'no label', 'rms': 'no label', 'net': 'no label', 'id': 'no label', 'updated': 'no label', 'place': 'no label', 'type': 'no label', 'horizontalError': 'no label', 'depthError': 'no label', 'magError': 'no label', 'magNst': 'no label', 'status': 'no label', 'locationSource': 'no label', 'magSource': 'no label', });
lyr_TitikTsunami_14.set('fieldLabels', {'field_1': 'no label', 'Unnamed: 0': 'no label', 'ID': 'no label', 'YEAR': 'no label', 'MONTH': 'no label', 'DAY': 'no label', 'HOUR': 'no label', 'MINUTE': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'LOCATION_NAME': 'no label', 'COUNTRY': 'no label', 'REGION': 'no label', 'CAUSE': 'no label', 'EVENT_VALIDITY': 'no label', 'EQ_MAGNITUDE': 'no label', 'EQ_DEPTH': 'no label', 'TS_INTENSITY': 'no label', 'DAMAGE_TOTAL_DESCRIPTION': 'no label', 'HOUSES_TOTAL_DESCRIPTION': 'no label', 'DEATHS_TOTAL_DESCRIPTION': 'no label', 'URL': 'no label', 'COMMENTS': 'no label', });
lyr_TitikTsunami_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});