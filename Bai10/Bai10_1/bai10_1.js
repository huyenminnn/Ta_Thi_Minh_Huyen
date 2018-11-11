var a =1
document.getElementById('pre').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	if (a==1) {
		a = 10
	} else a--
	document.getElementById('item'+a).style.display = 'block'

})
document.getElementById('next').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	if (a==10) {
		a = 1
	} else a++
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('1').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 1;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('2').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 2;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('3').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 3;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('4').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 4;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('5').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 5;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('6').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 6;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('7').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 7;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('8').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 8;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('9').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 9;
	document.getElementById('item'+a).style.display = 'block'
})
document.getElementById('10').addEventListener('click', function(){
	document.getElementById('item'+a).style.display = 'none'
	a = 10;
	document.getElementById('item'+a).style.display = 'block'
})
setInterval(function(){
	document.getElementById('item'+a).style.display = 'none'
	if (a==10) {
		a = 1
	} else a++
	document.getElementById('item'+a).style.display = 'block'
}, 10000);