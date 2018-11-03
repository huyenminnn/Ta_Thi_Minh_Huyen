var div = document.getElementsByTagName('div')
var p = document.getElementsByTagName('p')
var a =''
for (var i = 0; i <7; i++) {
	a += '*'
	p[i].innerHTML = a;
}

for (var i = 7; i < 14; i++) {
	p[i].innerHTML = "*******"
}
for (var i = 14; i <21; i++) {
	if (i==14 || i==20) {
		p[i].innerHTML = "*******"
	}
	else {
		for (var j = 0; j<7; j++) {
			if (j==0 || j==6) p[i].innerHTML += '*'
			else p[i].innerHTML += '&nbsp&nbsp'
		}		
	}
}
a = ''
for (var i = p.length - 1; i >= p.length - 7; i--) {
	a += '*'
	p[i].innerHTML = a;
}
