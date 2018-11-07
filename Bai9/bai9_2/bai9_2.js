var input = document.getElementsByTagName('input')
function check(){	
	for (var i = 0; i < input.length; i++) {
		input[i].checked=true
	}
}
function unCheck(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=false
	}
}
var tr = document.getElementsByTagName('tr')
for (var i = 0; i < tr.length; i++) {
	tr[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = 'green'
		console.log('huyen')
	})
	tr[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#8cc1e1'
		console.log('huyen')
	})
}