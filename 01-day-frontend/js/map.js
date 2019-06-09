function map_clicked(e) {
	$("#display-lat").val(e.latlng.lat);
	$("#display-lng").val(e.latlng.lng);
	let base_url = 'https://nominatim.openstreetmap.org/reverse';
	let request_url = base_url + '?format=jsonv2&lat=' + e.latlng.lat + '&lon=' + e.latlng.lng;
	$.get(request_url, data => {
		//console.log(data);
		let addr_arr = data.display_name.split(",");
		addr_arr = addr_arr.slice(0, addr_arr.length-5);
		$("#form-address").val(addr_arr.join());
	});

	if(marked_click) mymap.removeLayer(marked_click);
	marked_click = L.marker(e.latlng, {
		icon: new L.Icon({
			iconUrl: "res/marker-icon-green.png"
		})
	});
	marked_click.bindPopup("your chosen point"); 
	mymap.addLayer(marked_click);
}

function locate_me() {
	if(navigator.geolocation) {
		mymap.locate({setView: true});
	} else {
		alert("Geolocation not supported.");
	}
}

function map_init() {
	mymap = L.map('map').setView([default_lat, default_lng], zoom_lvl);
	var tile_source = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

	L.tileLayer(tile_source, {
		maxZoom: 128,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
}

function map_setview(lat=default_lat, lng=default_lng, _zoom_lvl=zoom_lvl) {
	mymap = L.map('map').setView([lat, lng], _zoom_lvl);
}

var mymap;
var zoom_lvl = 15;
var default_lat = 52.237049;
var default_lng = 21.017532;
var marked_click;

$(() => {
	map_init();
	mymap.on('click', map_clicked);
	$("#locate-me").on("click", locate_me);
	mymap.on('locationfound', e => {
		L.marker(e.latlng, {
			icon: new L.Icon({
				iconUrl: "res/marker-icon-red.png"
			})
		}).addTo(mymap).bindPopup("You are here.").openPopup().click(); 
	});
});

