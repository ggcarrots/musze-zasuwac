function map_type_extension(type) {
	switch(type) {
		case "default":
			location.reload();
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

theme_type_2() {
	let primaryColor = "#acb585";
	$(document.body).css("--primary-color", primaryColor);
}
