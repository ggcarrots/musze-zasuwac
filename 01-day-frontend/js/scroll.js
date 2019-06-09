$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
	let navbar_height = $("#navbar-main").first().height();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - navbar_height}, 500);
	$("navbar, a").removeClass("active");
	$(this).addClass("active");
});
