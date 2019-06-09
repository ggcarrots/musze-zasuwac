function show_map_setting() {
	$("#map-settings-content").toggleClass("invisible");
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

$( () => {
	$("#map-settings-switch").on("click", e => {
		show_map_setting();
	});
	$("#filter-submit").on("click", e => apply_map_filter(e));
});
