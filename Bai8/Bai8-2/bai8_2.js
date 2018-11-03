function bai2(){
	var s = 0
	for (var i = 0; i < 10; i++) {
		s += i*2
	}
	document.getElementById('b2').innerHTML = 'Tổng của 10 số chẵn đầu tiên là: '+s
}
function bai3(){
	var s = 0
	var n = document.getElementById('input').value
	for (var i = 1; i <= n; i++) {
		s += (1/i);
	}
	document.getElementById('b3').innerHTML = 'S = 1 + 1/2 + 1/3 + … + 1/n = ' +s
}
function bai4(){
	var s = 0
	var n = document.getElementById('input_N').value
	var m = document.getElementById('input_M').value
	var k = document.getElementById('input_K').value
	for (var i = parseInt(n); i <= parseInt(m); i++) {
		if (i % parseInt(k) == 0) 
			s += i		
	}
	document.getElementById('b4').innerHTML = 'Tổng các số chia hết cho k trong khoảng từ N đến M là: ' +s
}

function bai5(){
	var s = 0
	var n = document.getElementById('ip_n').value
	function giaithua(a){
		if (a ==0 || a == 1) {return a}
		else return a*giaithua(a-1)
	}
	for (var i = 1; i <= n; i++) {
		s += 1/giaithua(i)
	}
	document.getElementById('b5').innerHTML = 'S = 1 /1! + 2 /2! + ….+ n / n! = '+s
}
function bai6(){
	var n = document.getElementById('ip_n6').value
	var s = 0
	var i = 1
	do{
		s += i
		i++
	}while(i<=n);
	document.getElementById('b6').innerHTML = 'S = 1 + 2 + 3+ ... + n = '+s
}
function bai7(){
	var c = 0;
	for (var i = 1; i <= 100; i++) {
		if(i%3 == 0 || i%7 == 0) c++
	}
	document.getElementById('b7').innerHTML ='số lượng các số nguyên chia hết cho 3 hoặc 7 nằm trong đoạn 1 đến 100 là: '+c
}