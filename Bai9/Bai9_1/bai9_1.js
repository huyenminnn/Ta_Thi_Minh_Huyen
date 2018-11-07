function macdinh(){
	document.getElementById('text1').style.fontSize = '30px'
}
function lon(){
	var fs = document.getElementById("text1").style.fontSize
	var fsInt = parseInt(fs.split('px')[0])*1.4
	document.getElementById("text1").style.fontSize = fsInt + 'px'
}
function nho(){
	var fs = document.getElementById("text1").style.fontSize
	var fsInt = parseInt(fs.split('px')[0])*0.6
	document.getElementById("text1").style.fontSize = fsInt + 'px'
}