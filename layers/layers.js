ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([101.343991, -1.971032, 101.366118, -1.957213]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_JUMLAHHUNI_2 = new ol.format.GeoJSON();
var features_JUMLAHHUNI_2 = format_JUMLAHHUNI_2.readFeatures(json_JUMLAHHUNI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JUMLAHHUNI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUMLAHHUNI_2.addFeatures(features_JUMLAHHUNI_2);
var lyr_JUMLAHHUNI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUMLAHHUNI_2, 
                style: style_JUMLAHHUNI_2,
                popuplayertitle: "JUMLAH HUNI",
                interactive: true,
    title: 'JUMLAH HUNI<br />\
    <img src="styles/legend/JUMLAHHUNI_2_0.png" /> 1<br />\
    <img src="styles/legend/JUMLAHHUNI_2_1.png" /> 2<br />\
    <img src="styles/legend/JUMLAHHUNI_2_2.png" /> 3<br />\
    <img src="styles/legend/JUMLAHHUNI_2_3.png" /> 4<br />\
    <img src="styles/legend/JUMLAHHUNI_2_4.png" /> 5<br />\
    <img src="styles/legend/JUMLAHHUNI_2_5.png" /> 6<br />\
    <img src="styles/legend/JUMLAHHUNI_2_6.png" /> 7<br />\
    <img src="styles/legend/JUMLAHHUNI_2_7.png" /> 8<br />\
    <img src="styles/legend/JUMLAHHUNI_2_8.png" /> 15<br />\
    <img src="styles/legend/JUMLAHHUNI_2_9.png" /> <br />'
        });
var format_KONDISIMETER_3 = new ol.format.GeoJSON();
var features_KONDISIMETER_3 = format_KONDISIMETER_3.readFeatures(json_KONDISIMETER_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KONDISIMETER_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONDISIMETER_3.addFeatures(features_KONDISIMETER_3);
var lyr_KONDISIMETER_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONDISIMETER_3, 
                style: style_KONDISIMETER_3,
                popuplayertitle: "KONDISI METER",
                interactive: true,
    title: 'KONDISI METER<br />\
    <img src="styles/legend/KONDISIMETER_3_0.png" /> Standar<br />\
    <img src="styles/legend/KONDISIMETER_3_1.png" /> Standar
<br />\
    <img src="styles/legend/KONDISIMETER_3_2.png" /> Stsndar<br />\
    <img src="styles/legend/KONDISIMETER_3_3.png" /> Tertimbun<br />\
    <img src="styles/legend/KONDISIMETER_3_4.png" /> <br />'
        });
var format_MEREKMETER_4 = new ol.format.GeoJSON();
var features_MEREKMETER_4 = format_MEREKMETER_4.readFeatures(json_MEREKMETER_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MEREKMETER_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MEREKMETER_4.addFeatures(features_MEREKMETER_4);
var lyr_MEREKMETER_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MEREKMETER_4, 
                style: style_MEREKMETER_4,
                popuplayertitle: "MEREK METER",
                interactive: true,
    title: 'MEREK METER<br />\
    <img src="styles/legend/MEREKMETER_4_0.png" /> Akurat<br />\
    <img src="styles/legend/MEREKMETER_4_1.png" /> Amico<br />\
    <img src="styles/legend/MEREKMETER_4_2.png" /> Aquindo<br />\
    <img src="styles/legend/MEREKMETER_4_3.png" /> Barindo<br />\
    <img src="styles/legend/MEREKMETER_4_4.png" /> BR<br />\
    <img src="styles/legend/MEREKMETER_4_5.png" /> HDPE<br />\
    <img src="styles/legend/MEREKMETER_4_6.png" /> ISO<br />\
    <img src="styles/legend/MEREKMETER_4_7.png" /> Itron<br />\
    <img src="styles/legend/MEREKMETER_4_8.png" /> Linflow<br />\
    <img src="styles/legend/MEREKMETER_4_9.png" /> Linflow
<br />\
    <img src="styles/legend/MEREKMETER_4_10.png" /> Liron<br />\
    <img src="styles/legend/MEREKMETER_4_11.png" /> Onda<br />\
    <img src="styles/legend/MEREKMETER_4_12.png" /> Ultimag<br />\
    <img src="styles/legend/MEREKMETER_4_13.png" /> <br />'
        });
var format_POSISIMETERAN_5 = new ol.format.GeoJSON();
var features_POSISIMETERAN_5 = format_POSISIMETERAN_5.readFeatures(json_POSISIMETERAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POSISIMETERAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSISIMETERAN_5.addFeatures(features_POSISIMETERAN_5);
var lyr_POSISIMETERAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSISIMETERAN_5, 
                style: style_POSISIMETERAN_5,
                popuplayertitle: "POSISI METERAN",
                interactive: true,
    title: 'POSISI METERAN<br />\
    <img src="styles/legend/POSISIMETERAN_5_0.png" /> Belakang<br />\
    <img src="styles/legend/POSISIMETERAN_5_1.png" /> Depan<br />\
    <img src="styles/legend/POSISIMETERAN_5_2.png" /> di Dalam<br />\
    <img src="styles/legend/POSISIMETERAN_5_3.png" /> Dwpan<br />\
    <img src="styles/legend/POSISIMETERAN_5_4.png" /> Samping<br />\
    <img src="styles/legend/POSISIMETERAN_5_5.png" /> Samping
<br />\
    <img src="styles/legend/POSISIMETERAN_5_6.png" /> <br />'
        });
var format_SUMBERAIR_6 = new ol.format.GeoJSON();
var features_SUMBERAIR_6 = format_SUMBERAIR_6.readFeatures(json_SUMBERAIR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUMBERAIR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMBERAIR_6.addFeatures(features_SUMBERAIR_6);
var lyr_SUMBERAIR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMBERAIR_6, 
                style: style_SUMBERAIR_6,
                popuplayertitle: "SUMBER AIR",
                interactive: true,
    title: 'SUMBER AIR<br />\
    <img src="styles/legend/SUMBERAIR_6_0.png" /> IPAS Desa<br />\
    <img src="styles/legend/SUMBERAIR_6_1.png" /> Tidak Ada<br />'
        });
var format_BANGUNAN_PELANGGAN_7 = new ol.format.GeoJSON();
var features_BANGUNAN_PELANGGAN_7 = format_BANGUNAN_PELANGGAN_7.readFeatures(json_BANGUNAN_PELANGGAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BANGUNAN_PELANGGAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PELANGGAN_7.addFeatures(features_BANGUNAN_PELANGGAN_7);
var lyr_BANGUNAN_PELANGGAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PELANGGAN_7, 
                style: style_BANGUNAN_PELANGGAN_7,
                popuplayertitle: "BANGUNAN_PELANGGAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PELANGGAN_7.png" /> BANGUNAN_PELANGGAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_JUMLAHHUNI_2.setVisible(true);lyr_KONDISIMETER_3.setVisible(true);lyr_MEREKMETER_4.setVisible(true);lyr_POSISIMETERAN_5.setVisible(true);lyr_SUMBERAIR_6.setVisible(true);lyr_BANGUNAN_PELANGGAN_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_JUMLAHHUNI_2,lyr_KONDISIMETER_3,lyr_MEREKMETER_4,lyr_POSISIMETERAN_5,lyr_SUMBERAIR_6,lyr_BANGUNAN_PELANGGAN_7];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JUMLAHHUNI_2.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_KONDISIMETER_3.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_MEREKMETER_4.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_POSISIMETERAN_5.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_SUMBERAIR_6.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_BANGUNAN_PELANGGAN_7.set('fieldAliases', {'DATA UMUM': 'DATA UMUM', 'ID_2': 'ID_2', 'Nama Pada': 'Nama Pada', 'Nama Pemil': 'Nama Pemil', 'Nama Pengh': 'Nama Pengh', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Telp/Hp': 'Telp/Hp', 'Nomor Samb': 'Nomor Samb', 'Kondisi Ba': 'Kondisi Ba', 'Jenis Bang': 'Jenis Bang', 'Status Ban': 'Status Ban', 'DATA TEKNI': 'DATA TEKNI', 'Meter Air': 'Meter Air', 'Posisi Met': 'Posisi Met', 'Kondisi Me': 'Kondisi Me', 'Merk Meter': 'Merk Meter', 'Segel Mete': 'Segel Mete', 'Box Meter': 'Box Meter', 'Jenis Pipa': 'Jenis Pipa', 'Diameter P': 'Diameter P', 'Koneksi da': 'Koneksi da', 'Kondisi Pi': 'Kondisi Pi', 'DATA SOSIA': 'DATA SOSIA', 'Jumlah Pen': 'Jumlah Pen', 'Sumber Air': 'Sumber Air', 'Keluhan Pe': 'Keluhan Pe', 'Catatan': 'Catatan', 'Y': 'Y', 'X': 'X', 'Photo Ruma': 'Photo Ruma', 'Photo Mete': 'Photo Mete', 'Koord.Lok': 'Koord.Lok', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JUMLAHHUNI_2.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_KONDISIMETER_3.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_MEREKMETER_4.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_POSISIMETERAN_5.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_SUMBERAIR_6.set('fieldImages', {'DATA UMUM': 'TextEdit', 'ID_2': 'TextEdit', 'Nama Pada': 'TextEdit', 'Nama Pemil': 'TextEdit', 'Nama Pengh': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Telp/Hp': 'TextEdit', 'Nomor Samb': 'TextEdit', 'Kondisi Ba': 'TextEdit', 'Jenis Bang': 'TextEdit', 'Status Ban': 'TextEdit', 'DATA TEKNI': 'TextEdit', 'Meter Air': 'TextEdit', 'Posisi Met': 'TextEdit', 'Kondisi Me': 'TextEdit', 'Merk Meter': 'TextEdit', 'Segel Mete': 'TextEdit', 'Box Meter': 'TextEdit', 'Jenis Pipa': 'TextEdit', 'Diameter P': 'TextEdit', 'Koneksi da': 'TextEdit', 'Kondisi Pi': 'TextEdit', 'DATA SOSIA': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Sumber Air': 'TextEdit', 'Keluhan Pe': 'TextEdit', 'Catatan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Photo Ruma': 'TextEdit', 'Photo Mete': 'TextEdit', 'Koord.Lok': 'TextEdit', });
lyr_BANGUNAN_PELANGGAN_7.set('fieldImages', {'DATA UMUM': '', 'ID_2': '', 'Nama Pada': '', 'Nama Pemil': '', 'Nama Pengh': '', 'Alamat': '', 'Kecamatan': '', 'Telp/Hp': '', 'Nomor Samb': '', 'Kondisi Ba': '', 'Jenis Bang': '', 'Status Ban': '', 'DATA TEKNI': '', 'Meter Air': '', 'Posisi Met': '', 'Kondisi Me': '', 'Merk Meter': '', 'Segel Mete': '', 'Box Meter': '', 'Jenis Pipa': '', 'Diameter P': '', 'Koneksi da': '', 'Kondisi Pi': '', 'DATA SOSIA': '', 'Jumlah Pen': '', 'Sumber Air': '', 'Keluhan Pe': '', 'Catatan': '', 'Y': '', 'X': '', 'Photo Ruma': '', 'Photo Mete': '', 'Koord.Lok': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'hidden field', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JUMLAHHUNI_2.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'hidden field', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'hidden field', 'Kondisi Me': 'hidden field', 'Merk Meter': 'hidden field', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'inline label - always visible', 'Sumber Air': 'hidden field', 'Keluhan Pe': 'inline label - visible with data', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_KONDISIMETER_3.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'hidden field', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'hidden field', 'Kondisi Me': 'inline label - always visible', 'Merk Meter': 'hidden field', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'hidden field', 'Sumber Air': 'hidden field', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_MEREKMETER_4.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'hidden field', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'hidden field', 'Kondisi Me': 'hidden field', 'Merk Meter': 'inline label - always visible', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'hidden field', 'Sumber Air': 'hidden field', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_POSISIMETERAN_5.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'hidden field', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'inline label - always visible', 'Kondisi Me': 'hidden field', 'Merk Meter': 'hidden field', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'hidden field', 'Sumber Air': 'hidden field', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_SUMBERAIR_6.set('fieldLabels', {'DATA UMUM': 'hidden field', 'ID_2': 'hidden field', 'Nama Pada': 'hidden field', 'Nama Pemil': 'hidden field', 'Nama Pengh': 'hidden field', 'Alamat': 'hidden field', 'Kecamatan': 'hidden field', 'Telp/Hp': 'hidden field', 'Nomor Samb': 'hidden field', 'Kondisi Ba': 'hidden field', 'Jenis Bang': 'hidden field', 'Status Ban': 'hidden field', 'DATA TEKNI': 'hidden field', 'Meter Air': 'hidden field', 'Posisi Met': 'hidden field', 'Kondisi Me': 'hidden field', 'Merk Meter': 'hidden field', 'Segel Mete': 'hidden field', 'Box Meter': 'hidden field', 'Jenis Pipa': 'hidden field', 'Diameter P': 'hidden field', 'Koneksi da': 'hidden field', 'Kondisi Pi': 'hidden field', 'DATA SOSIA': 'hidden field', 'Jumlah Pen': 'hidden field', 'Sumber Air': 'inline label - always visible', 'Keluhan Pe': 'hidden field', 'Catatan': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Photo Ruma': 'hidden field', 'Photo Mete': 'hidden field', 'Koord.Lok': 'hidden field', });
lyr_BANGUNAN_PELANGGAN_7.set('fieldLabels', {'DATA UMUM': 'inline label - always visible', 'ID_2': 'inline label - always visible', 'Nama Pada': 'inline label - always visible', 'Nama Pemil': 'inline label - always visible', 'Nama Pengh': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Telp/Hp': 'inline label - always visible', 'Nomor Samb': 'inline label - always visible', 'Kondisi Ba': 'inline label - always visible', 'Jenis Bang': 'inline label - always visible', 'Status Ban': 'inline label - always visible', 'DATA TEKNI': 'inline label - always visible', 'Meter Air': 'inline label - always visible', 'Posisi Met': 'inline label - always visible', 'Kondisi Me': 'inline label - always visible', 'Merk Meter': 'inline label - always visible', 'Segel Mete': 'inline label - always visible', 'Box Meter': 'inline label - always visible', 'Jenis Pipa': 'inline label - always visible', 'Diameter P': 'inline label - always visible', 'Koneksi da': 'inline label - always visible', 'Kondisi Pi': 'inline label - always visible', 'DATA SOSIA': 'inline label - always visible', 'Jumlah Pen': 'inline label - always visible', 'Sumber Air': 'inline label - always visible', 'Keluhan Pe': 'inline label - always visible', 'Catatan': 'inline label - always visible', 'Y': 'inline label - always visible', 'X': 'inline label - always visible', 'Photo Ruma': 'inline label - always visible', 'Photo Mete': 'inline label - always visible', 'Koord.Lok': 'inline label - always visible', });
lyr_BANGUNAN_PELANGGAN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});