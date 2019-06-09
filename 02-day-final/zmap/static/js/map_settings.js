function show_map_setting() {
	$("#map-type-content").addClass("invisible");
	$("#map-settings-content").toggleClass("invisible");
	$("#navbar-main-collapse").removeClass("show");
} 

function show_map_selector() {
	$("#map-settings-content").addClass("invisible");
	$("#map-type-content").toggleClass("invisible");
	$("#navbar-main-collapse").removeClass("show");
}

function apply_map_filter(e) {
	e.preventDefault();
	show_map_setting();
	clear_map();
	let _address = $("#filter-address").val();
	let _title = $("#filter-title").val();
	let _category = $("#filter-category").val();
	populate_n_filter({address: _address, category: _category, title: _title});
}

function change_map_type(e) {
	e.preventDefault();
	show_map_selector();
	let new_type = $("#map-type-set").val();
	$("#form-map-type").val(new_type);
	clear_map();
	map_populate();
	map_type_extension(new_type);
}

$( () => {
	map_type_extension($("#map-type-set").val());
	$("#map-settings-switch").on("click", e => {show_map_setting();});
	$("#filter-submit").on("click", e => apply_map_filter(e));
	$("#map-type-switch").on("click", e => {show_map_selector();});
	$("#map-type-submit").on("click", e => change_map_type(e));
});


function map_type_extension(type) {
	switch(type) {
		case "default":
			theme_default();
			break;
		case "type_2":
			theme_type_2();
			reload_forms_type_2();
			break;
		case "type_3":
			theme_type_3();
			break;
	}
}

function theme_default() {
	let primaryColor = "rgba(0,0,0,.075)";
	$(document.body).css("--primary-color", primaryColor);
}

function theme_type_2() {
	let primaryColor = "#acb585";
	$(document.body).css("--primary-color", primaryColor);
}

function reload_forms_type_2() {
	//reload forms here
}

function theme_type_3() {
	let primaryColor = "#c4a8c3";
	$(document.body).css("--primary-color", primaryColor);
}
