$(document).ready(function(){
	function parallaxFooterImage() {
		var $window = $(window),
			$footer = $('.site-footer'),
			windowBottom = $(window).scrollTop() + $(window).height(),
			footerTop = $footer.offset().top + 285;

		// die if footer isn't in view
		if (windowBottom < footerTop) return;

		var amountOfPixelsShown = windowBottom - footerTop;
		var decimalOfPixelsShown = amountOfPixelsShown / ($footer.outerHeight() - 285);

		// Needs to be from 600% when off screen to 100% when at bottom
		var yPos = ((1 - decimalOfPixelsShown) * 500) + 100;

		var coords = '50% '+ yPos + '%';
		$('.site-footer').css({ backgroundPosition: coords });
	}

	parallaxFooterImage();

	$(window).scroll(function() {
		parallaxFooterImage();
	});
});
