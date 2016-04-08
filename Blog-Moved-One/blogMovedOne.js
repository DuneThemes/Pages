	// Blog Moved One by Dune Themes
	
	// Need help?
	// dunethemes.tumblr.com/support
	// dunethemes@gmail.com
	// @DuneThemes
	
	// Do not redistribute or claim as your own.
	// © Dune Themes
	
$(document).ready(function() {
	$("#top-section").mouseenter(function(){
		$('img.top-section-img').fadeIn();
		$('img.bottom-section-img').fadeOut();
	});
	$("#bottom-section").mouseenter(function(){
		$('img.bottom-section-img').fadeIn();
		$('img.top-section-img').fadeOut();
	});
});
