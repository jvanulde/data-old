---
authorName: Natural Resources Canada
authorUrl:
dateModified: 2021-07-26
noContentTitle: true
pageclass: wb-prettify all-pre
subject:
  en: [GV Government and Politics, Government services]
  fr: [GV Gouvernement et vie politique, Services gouvernementaux]
title: Zones de peuplement et dangers naturels au Canada
lang: fr
altLangPage: ../en/nhsl_physical_exposure_map
nositesearch: true
nomenu: true
nofooter: true
sitesearch: false
breadcrumbs:
  - title: "OpenDRR"
    link: "https://www.github.com/OpenDRR/"
  - title: "Téléchargements de OpenDRR"
    link: "/fr"
  - title: "Zones de peuplement et dangers naturels au Canada"
    link: "/fr/nhsl"
  - title: "Exposition physique"
    link: "/fr/nhsl#physical_exposure"
---
<!-- Load Leaflet from CDN -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>

<!-- Load Esri Leaflet from CDN -->
<script src="https://unpkg.com/esri-leaflet@3.0.2/dist/esri-leaflet.js"
integrity="sha512-myckXhaJsP7Q7MZva03Tfme/MSF5a6HC2xryjAM4FxPLHGqlh5VALCbywHnzs2uPoF/4G/QVXyYDDSkp5nPfig=="
crossorigin=""></script>

<!-- Load Esri Leaflet Renderers plugin to use feature service symbology -->
<script src="https://unpkg.com/esri-leaflet-renderers@2.1.2" crossorigin=""></script>

<script src='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/Leaflet.fullscreen.min.js'></script>
<link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v1.0.1/leaflet.fullscreen.css' rel='stylesheet' />

<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>

 <style>

        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        
        #map {
            width: 100%;
            height: 500px; 
        }

        div.item .label, div.item .value {
            color: #000;
            font-size: 14px;
            border: none;
        }

        .info {
            padding: 6px 8px;
            font: 14px/16px Arial, Helvetica, sans-serif;
            background: white;
            background: rgba(255,255,255,0.8);
            box-shadow: 0 0 15px rgba(0,0,0,0.2);
            border-radius: 5px;
        }

        .info h4 {
            margin: 0 0 5px;
            color: #777;
        }

        #modal {
            background-color: white;
            animation-name: progress;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            height: 4px;
            margin-top: -4px;
        }

        @keyframes progress {
            0% {
                background-color: white;
            }
            50% {
                background-color:rgba(255, 0, 0, 0.500);
            }
            100% {
                background-color: white;
            }
        }

        .legend {
            line-height: 18px;
            color: #555;
        }
        
        .legend i {
            width: 18px;
            height: 18px;
            float: left;
            margin-right: 8px;
        }

        .attr {
            width: 25%;
            float: left;
        }

        .prop {
            font-weight: bold;
            margin-right: 10px;
        }

        .prop::after {
            content: ':';
        }

        .val {
            float: right;
            margin-right: 10px;
        }

        #sidebar {
            overflow: auto;
        }

    </style>

<div id="map"></div>

<script>

	var tiles = L.tileLayer( '//{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
	});

	var natural_hazards_building_exposure_model = L.esri.featureLayer({
		url: 'https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/nhsl_fr/MapServer/7',
		simplifyFactor: 0.25,
		precision: 5,
		fields: [ 'OBJECTID', 'E_BldgNum' ]
	}).on( 'load', function ( e ) {
		this.metadata( function ( error, metadata ) {
			buildLegend( metadata );
		});
		$( '#modal' ).remove();
	}).on( 'loading', function ( e ) {
		$( '#map' ).before( '<div id="modal"></div>' );
	}).bindPopup( function ( layer ) {
    	return L.Util.template( '<p>Nombre de bâtiments: <strong>{E_BldgNum}</strong></p>', layer.feature.properties );
  });

	var landuse = L.esri.featureLayer({
		url: 'https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/nhsl_fr/MapServer/8',
		simplifyFactor: 0.25,
		precision: 5,
    opacity: 0.5,
		fields: [ 'OBJECTID', 'E_LandUse' ]
	}).on( 'load', function ( e ) {
		this.metadata( function ( error, metadata ) {
			buildLegend( metadata );
		});
		$( '#modal' ).remove();
	}).on( 'loading', function ( e ) {
		$( '#map' ).before( '<div id="modal"></div>' );
	}).bindPopup( function ( layer ) {
    	return L.Util.template( '<p>Utilisation des terres: <strong>{E_LandUse}</strong></p>', layer.feature.properties );
  });

    var population_density = L.esri.featureLayer({
		url: 'https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/nhsl_fr/MapServer/9',
		simplifyFactor: 0.25,
		precision: 5,
		fields: [ 'OBJECTID', 'Et_PopNight___E_AreaHa' ]
  	}).on( 'load', function ( e ) {
		this.metadata( function ( error, metadata ) {
			buildLegend( metadata );
		});
		$( '#modal' ).remove();
	}).on( 'loading', function ( e ) {
		$( '#map' ).before( '<div id="modal"></div>' );
	}).bindPopup( function ( layer ) {
    	return L.Util.template( '<p>Densité de population: <strong>{Et_PopNight___E_AreaHa}</strong></p>', layer.feature.properties );
  });

    var building_assets_per_hectare = L.esri.featureLayer({
		url: 'https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/nhsl_fr/MapServer/10',
		simplifyFactor: 0.25,
		precision: 5,
		fields: [ 'OBJECTID', 'Et_AssetValue___E_AreaHa' ]
  	}).on( 'load', function ( e ) {
		this.metadata( function ( error, metadata ) {
			buildLegend( metadata );
		});
		$( '#modal' ).remove();
	}).on( 'loading', function ( e ) {
		$( '#map' ).before( '<div id="modal"></div>' );
	}).bindPopup( function ( layer ) {
      var assetval =  L.Util.template( '{Et_AssetValue___E_AreaHa}', layer.feature.properties );
      return '<p><p>Patrimoine immobilier par hectare: <strong>' + formatter.format(assetval) + '</strong></p>'
  });

	var building_density = L.esri.featureLayer({
		url: 'https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/nhsl_fr/MapServer/11',
		simplifyFactor: 0.25,
		precision: 5,
		fields: [ 'OBJECTID', 'Et_BldgNum___E_AreaHa' ]
	}).on( 'load', function ( e ) {
		this.metadata( function ( error, metadata ) {
			buildLegend( metadata );
		});
		$( '#modal' ).remove();
	}).on( 'loading', function ( e ) {
		$( '#map' ).before( '<div id="modal"></div>' );
	}).bindPopup( function ( layer ) {
    return L.Util.template( '<p>Densité de construction: <strong>{Et_BldgNum___E_AreaHa}</strong></p>', layer.feature.properties );
  });

  var map = L.map( 'map', {
    fullscreenControl: true,
    center: [ 49.2827, -123.1207 ],
    zoom: 12,
    layers: [ tiles ]
  }),
  legend = L.control( { position: 'bottomright' } );

  map.on( 'overlayadd', function() {
    $( '#map' ).before( '<div id="modal"></div>' );
  });

  map.on( 'fullscreenchange', function () {
    map.invalidateSize();
  });

  var overlays = {
    'Utilisation des terres': landuse,
    'Densité de Population': population_density,
    'Actifs de construction par hectare': building_assets_per_hectare,
    'Densité de construction': building_density,
    // 'Modèle d\'exposition des bâtiments aux risques naturels': natural_hazards_building_exposure_model
  };

  L.control.layers( overlays, null, { collapsed: false } ).addTo( map );

  landuse.addTo( map );

  var formatter = new Intl.NumberFormat( 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    //Usage: formatter.format(2500); $2,500.00
  });

  function buildLegend( metadata ) {

    map.removeControl(legend);

    var renderers = metadata.drawingInfo.renderer.classBreakInfos ? metadata.drawingInfo.renderer.classBreakInfos : metadata.drawingInfo.renderer.uniqueValueInfos;

    legend.onAdd = function ( map ) {

      var div = L.DomUtil.create( 'div', 'info legend' );

      if ( renderers.length === 0 ) {
        return L.DomUtil.create( 'div' );
      }

      div.innerHTML += '<center><strong>' + metadata.name + '</strong></center>';

      for ( var i = 0; i < renderers.length; i++ ) {
        div.innerHTML +=
        '<div style="white-space: nowrap;margin-top: 2px;"><i style="background:rgb( ' + renderers[i][ 'symbol' ].color[0] + ',' + renderers[i][ 'symbol' ].color[1] + ',' + renderers[i][ 'symbol' ].color[2] + ',' + renderers[i][ 'symbol' ].color[3] + ' );border-color:rgb( ' + renderers[i][ 'symbol' ][ 'outline' ].color[0] + ',' + renderers[i][ 'symbol' ][ 'outline' ].color[1] + ',' + renderers[i][ 'symbol' ][ 'outline' ].color[2]+ ',' + renderers[i][ 'symbol' ][ 'outline' ].color[3] + ' );border-width:' + renderers[i][ 'symbol' ][ 'outline' ].width + 'px;"></i> ' +
        renderers[i][ 'label' ] + '</div>';
      }

      return div;

    };

    legend.addTo( map );
  }
</script>