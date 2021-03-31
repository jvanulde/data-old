var simplemaps_canadamap_mapdata = {

	main_settings: {
		//General settings
		width: 'responsive', //or 'responsive'
		background_color: '#FFFFFF',
		background_transparent: 'yes',
		border_color: '#ffffff',
		popups: 'detect', //on_click, on_hover, or detect

		//State defaults
		state_description: '',
		state_color: '#ADAFAA',
		state_hover_color: '#333333',
		// state_url: 'http://simplemaps.com',
		border_size: 1.5,
		all_states_inactive: 'no',
		all_states_zoomable: 'yes',

		//Location defaults
		location_description: '',
		location_color: '#FF0000',
		location_opacity: .8,
		location_hover_opacity: 1,
		location_url: '',
		location_size: 20,
		location_type: 'square', // circle, square, image
		// location_image_source: 'frog.png', //name of image in the map_images folder		
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',

		//Labels
		label_color: '#d5ddec',
		label_hover_color: '#d5ddec',
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',

		//Zoom settings
		zoom: 'yes', //use default regions
		back_image: 'no', //Use image instead of arrow for back zoom				
		arrow_color: '#333333',
		arrow_color_border: '#333333',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds

		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	

		//Advanced settings
		div: 'map',
		auto_load: 'yes',
		url_new_tab: 'no',
		images_directory: 'default', //e.g. 'map_images/'
		fade_time: .1, //time to fade out	
		import_labels: 'no',
		link_text: 'View Website'  //Text mobile browsers will see for links	
	},

	state_specific: {
		AB: {
			name: 'Economic Regions of Alberta',
			description: '8 Regions',
			color: 'default',
			hover_color: 'default',
		},

		BC: {
			name: 'Economic Regions of British Columbia',
			description: '8 Regions',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		SK: {
			name: 'Saskatchewan',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		MB: {
			name: 'Manitoba',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		ON: {
			name: 'Ontario',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		QC: {
			name: 'Quebec',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		NB: {
			name: 'New Brunswick',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		PE: {
			name: 'Prince Edward Island',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		NS: {
			name: 'Nova Scotia',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		NL: {
			name: 'Newfoundland',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		NU: {
			name: 'Nunavut',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		NT: {
			name: 'Northwest Territories',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		},

		YT: {
			name: 'Yukon',
			description: 'default',
			color: 'default',
			hover_color: 'default',
			url: 'default'
		}
	},

	locations: {
		'0': {
			name: 'Kootenay',
			lat: 49.91,
			lng: -117.49,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/kootenay.html',
			// description: 'lol',
			// descriptionTwo: 'lol'
		},
		'1': {
			name: 'Nechako',
			lat: 53.91,
			lng: -122.71,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/nechako.html'
		},
		'2': {
			name: 'Cariboo',
			lat: 52.40,
			lng: -123.45,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/cariboo.html'
		},
		'3': {
			name: 'Thompson Okanagan',
			lat: 49.8859,
			lng: -119.4356,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/thompson-okanagan.html'
		},
		'4': {
			name: 'Lower Mainland Southwest',
			lat: 49.05,
			lng: -122.32,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/lower-mainland-southwest.html'
		},
		'5': {
			name: 'Vancouver Island and Coast',
			lat: 48.25,
			lng: -123.21,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/vancouver-island-and-coast.html'
		},
		'6': {
			name: 'North Coast',
			lat: 54.31,
			lng: -130.32,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/north-coast.html'
		},
		'7': {
			name: 'North East',
			lat: 58.80,
			lng: -122.69,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/northeast.html'
		},
		'8': {
			name: 'Camrose Drumheller',
			lat: 53.02,
			lng: -112.82,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/camrose-drumheller.html'
		},
		'9': {
			name: 'Red Deer',
			lat: 52.26,
			lng: -113.81,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/red-deer.html'
		},
		'10': {
			name: 'Calgary',
			lat: 51.04,
			lng: -114.07,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/calgary.html'
		},
		'11': {
			name: 'Banff Jasper Rocky Mountain House',
			lat: 52.88,
			lng: -118.07,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/banff-jasper-rocky-mountain-house.html'
		},
		'12': {
			name: 'Lethbridge Medicine Hat',
			lat: 50.00,
			lng: -112.00,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/lethbridge-medicine-hat.html'
		},
		'13': {
			name: 'Wood Buffalo Cold Lake',
			lat: 56.72,
			lng: -111.38,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/wood-buffalo-cold-lake.html'
		},
		'14': {
			name: 'Edmonton',
			lat: 53.53,
			lng: -113.48,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/edmonton.html'
		},
		'15': {
			name: 'Athabasca Grande Prairie Peace River',
			lat: 54.71,
			lng: -113.28,
			color: 'default',
			url: 'http://127.0.0.1:4000/economic-regions/athabasca-grande-prairie-peace-river.html'
		},


	},

	labels: {
		PE: {
			x: 960,
			y: 814,
			parent_id: "PE",
			pill: "yes",
			width: 65,
			display: "all"
		},
		NS: {
			x: 960,
			y: 854,
			parent_id: "NS",
			pill: "yes",
			width: 65,
			display: "all"
		},
		AB: {
			x: 232,
			y: 657,
			parent_id: "AB"
		},
		BC: {
			x: 117,
			y: 635,
			parent_id: "BC"
		},
		YT: {
			x: 75,
			y: 440,
			parent_id: "YT"
		},
		NT: {
			x: 225,
			y: 471,
			parent_id: "NT"
		},
		NU: {
			x: 429,
			y: 478,
			parent_id: "NU"
		},
		SK: {
			x: 332,
			y: 670,
			parent_id: "SK"
		},
		MB: {
			x: 430,
			y: 675,
			parent_id: "MB"
		},
		NL: {
			x: 840,
			y: 643,
			parent_id: "NL"
		},
		NB: {
			x: 837,
			y: 798,
			parent_id: "NB"
		},
		ON: {
			x: 552,
			y: 747,
			parent_id: "ON"
		},
		QC: {
			x: 718,
			y: 704,
			parent_id: "QC"
		}
	}
}







