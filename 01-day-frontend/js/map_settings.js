function show_map_setting() {
	$("#map-settings-content").toggleClass("invisible");
} 

function apply_map_filter(e) {
	e.preventDefault();
	show_map_setting();
}

$( () => {
	$("#map-settings-switch").on("click", e => {
		show_map_setting();
	});
	$("#filter-submit").on("click", e => apply_map_filter(e));
});
