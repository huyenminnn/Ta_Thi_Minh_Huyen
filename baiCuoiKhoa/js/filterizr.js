$(function() {
	var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
	window.filterizr = f;

	$('button').click(function() {
		$('button').removeClass('active');
		$(this).addClass('active');
	});
});
