$(function(){
	$('.btn-sm').click(function(e){
		e.preventDefault();
		var check = true
		var name = $('#exampleInputname').val()
		var email = $('#exampleInputEmail').val()
		var phone = $('#exampleInputPhone').val()
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (name=='') {
			$('#exampleInputname').css('border-color','red')
			check = false
		} else{
			$('#exampleInputname').css('border-color','#ced4da')
		}
		if (email=='' || !filter.test(email)) {
			$('#exampleInputEmail').css('border-color','red')
			check = false
		} else{
			$('#exampleInputEmail').css('border-color','#ced4da')
		}
		function checkPhoneNumber(a) {
			var flag = false;
			a = a.replace('(+84)', '0');
			a = a.replace('+84', '0');
			a = a.replace('0084', '0');
			a = a.replace(/ /g, '');
			if (a != '') {
				var firstNumber = a.substring(0, 2);
				if ((firstNumber == '09' || firstNumber == '08') || (firstNumber == '03') && a.length == 10) {
					if (a.match(/^\d{10}/)) {
						flag = true;
					}
				} 
			}
			return flag;
		}
		if (phone == '' || !checkPhoneNumber(phone)) {
			$('#exampleInputPhone').css('border-color','red')
			check = false
		} else{
			$('#exampleInputPhone').css('border-color','#ced4da')
		}
		if (check) {
			alert('Successful!')
		}
	})
})