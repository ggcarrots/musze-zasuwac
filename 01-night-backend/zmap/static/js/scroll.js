$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
	let navbar_height = $("#navbar-main").first().height();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - navbar_height}, 500);
	$("navbar, a").removeClass("active");
	$(this).addClass("active");
});

function check_hash_onload() {
	switch(window.location.hash) {
		case "#failure":
			alert("Your submission failed.");
			break;
		case "#thanks":
			alert("Thank you for your submission!");
			break;
	}
	window.location.hash = "";
}

$(() => {
	check_hash_onload();
});
