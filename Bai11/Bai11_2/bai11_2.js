$(function(){
	$('button').click(function(){
		if ($(this).html() == '<i class="fas fa-plus"></i>') {
			$('button').html('<i class="fas fa-plus"></i>')
			$('.content').css('display','none')
			$(this).html('<i class="fas fa-minus"></i>')
			$(this).parent().next().css('display','block')
		} else{
			$(this).html('<i class="fas fa-plus"></i>')
			$(this).parent().next().css('display','none')
		}
	})
})