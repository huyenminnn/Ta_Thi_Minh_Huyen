$(function(){
	$('.filtr-item').mouseenter(function(){
		$(this).children('img').fadeTo('slow',0.2)
		$(this).children('.text').fadeIn(500)

	})
	$('.filtr-item').mouseleave(function(){
		$(this).children('img').fadeTo('slow',1)
		$(this).children('.text').fadeOut(500)
	})
})