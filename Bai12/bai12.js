$(function(){
	var info = $('.info')
	var a = 0
	$('#next').click(function(){
		if (info.eq(3).css('display')=='block') {
			if ($('#checkbox').is(':checked')) {
				$('.n-check').text('')
				$('.d4').css('background','#10b4d2')
				alert('Successful!')
			} else{
				$('.n-check').text('Please check it!')
				$('.d4').css('background','red')
			}
		}	

		if (info.eq(2).css('display')=='block') {
			info.eq(2).css('display','none')
			info.eq(3).css('display','block')
			$('.d4').css('background','#10b4d2')
			$('.d3').css('background','#6cdef2')
			$('#next').text('Finish')
		} 
		
		if (info.eq(1).css('display')=='block') {
			var i = 1 
			var f_name = $('#first-name').val()
			var l_name = $('#last-name').val()
			var email = $('#email').val()
			var addr = $('#addr').val()
			var age = $('#age').val()
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (f_name=='') {
				i=0
				$('.n-first-name').text('This field is required.')
			} else {
				$('.n-first-name').text('')
			}
			if (l_name=='') {
				i=0
				$('.n-last-name').text('This field is required.')
			} else {
				$('.n-last-name').text('')
			}
			if (email=='') {
				i=0
				$('.n-email').text('This field is required.')
			} else if (!filter.test(email)) {
				i=0
				$('.n-email').text('Email is not correct.')
			} else {
				$('.n-email').text('')
			}
			if (addr=='') {
				i=0
				$('.n-addr').text('This field is required.')
			}else {
				$('.n-addr').text('')
			}
			if (age=='') {
				i=0
				$('.n-age').text('This field is required.')
			}else {
				a = parseInt(age)
				$('.n-age').text('')
			}
			if (i) {
				info.eq(1).css('display','none')
				info.eq(2).css('display','block')
				$('.d3').css('background','#10b4d2')
				$('.d2').css('background','#6cdef2')
				if (a<18) {
					$('.warn').text('Your age is less than 18!')
				} else{
					$('.warn').text('No warning.')
				}
			}else{
				$('.d2').css('background','red')
			}
		}

		if (info.eq(0).css('display')=='block') {
			$('#pre').css('background','#10b4d2')
			var i = 1
			var name = $('#name').val()
			var pass = $('#pass').val()
			var con_pass = $('#confirm-pass').val()
			if (name=='') {
				i=0
				$('.n-name').text('This field is required.')
			} else {
				$('.n-name').text('')
			}
			if (pass=='') {
				i=0
				$('.n-pass').text('This field is required.')
			} else {
				$('.n-pass').text('')
			}
			if (con_pass=='') {
				i=0
				$('.n-con-pass').text('This field is required.')
			} else if (pass!=con_pass) {
				i=0
				$('.n-con-pass').text('confirm password is not correct.')
			} else {
				$('.n-con-pass').text('')
			}
			if (i) {
				info.eq(0).css('display','none')
				info.eq(1).css('display','block')
				$('.d2').css('background','#10b4d2')
				$('.d1').css('background','#6cdef2')
			}else{
				$('.d1').css('background','red')
			}
		}

		
	})
	$('#pre').click(function(){
		for (var i = 1; i < info.length; i++) {
			if (info.eq(i).css('display')=='block') {
				info.eq(i).css('display','none')
				info.eq(i-1).css('display','block')
				$('.d'+i).css('background','#10b4d2')
				$('.d'+(i+1)).css('background','#6cdef2')
				break
			}
		}
	})
})