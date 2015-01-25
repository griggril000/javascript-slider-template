$(window).scroll(function() {
	
	if ($(this).scrollTop() < 350) {
	
		$("#footerBuyPrint").slideUp();
	
	} else {
	
		$("#footerBuyPrint").slideDown();
	
	}
	
});