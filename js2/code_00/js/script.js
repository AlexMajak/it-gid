// let a = 6;
// let b = 'Hello';

// console.log(a);

// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function () {
// 	console.log(inputIn.value);
// 	div.innerHTML = inputIn.value;
// 	inputIn.value = '';
// }

let a = 6;
//<= >=
if (a != 9) {
	//true
	console.log('Yes');
} else {
	console.log('else');
}

// switch (key) {
// 	case value:

// 		break;

// 	default:
// 		break;
// }

// let button = document.querySelector('button');
// let input = document.querySelector('.age');
// ()=> стрелочная функция
// button.onclick = () => {
// 	let num = +input.value;
// 	if (num >= 16 && num < 60) {
// 		console.log("Welcome");
// 	}
// 	else if (num > 60) {
// 		console.log('Ты точно сюда?')
// 	}
// 	else {
// 		console.log('ты не пройдешь!!!');
// 	}

// 	switch (num) {
// 		case 15:
// 			console.log('Еще год потерпи')
// 			break;
// 		case 16:
// 			console.log('Ура можно')
// 			break;
// 		case 25:
// 			console.log('Ты взрослый')
// 			break;
// 		default:
// 			console.log('дрочи');
// 			break;
// 	}
// }

// let b = 5;
// console.log(b == 7);
// console.log(b < 7);
// console.log(b > 3 && b < 7);
// console.log(b == 3 || b == 7);

// let factorialOut = document.querySelector('.factorial');
// let btn1 = document.querySelector('.btn');
// let input = document.querySelector('.in-1');
// btn1.onclick = factorial(input);

// const factorial1 = (n) => {
// 	if (n === 0) {
// 		return 1;
// 	}
// 	return n * factorial1(n - 1);
// }

// btn1.onclick = () => {
// 	console.log(factorial1(input.value));
// }
// console.log(factorial1(0));
// console.log(factorial1(1));
// console.log(factorial1(3));
// console.log(factorial1(5));

// const sum1 = (n) => {
// 	if (n === 1) {
// 		return 1;
// 	}

// 	return n + sum1(n - 1);
// };
// console.log(sum1(10));

// const sum2 = n => (n === 1) ? 1 : n + sum2(n - 1);
// console.log(sum2(10));

// const product = (n) => {
// 	return n * product(n + 1);

// 	if (n === 5) {
// 		return n;
// 	}
// };

/*
 * вычисление: 2 * 3 * 4 * 5 * 6 * 7 * ...
 * RangeError: Maximum call stack size exceeded
 */
// console.log(product(2));

// document.querySelector('.one').onchange = () => {
// 	let i = document.querySelector('.one').value;
// 	console.log(i);
// 	document.querySelector('button').style.backgroundColor = i;

// }

// document.querySelector('.one').onchange = () => {
// 	let i = document.querySelector('.one').value;
// 	console.log(i);
// 	document.querySelector('button').style.backgroundColor = i;
// }

// document.querySelector('.one').oninput = () => {
// 	let i = document.querySelector('.one').value;
// 	console.log(i);
// 	document.querySelector('span').innerHTML = i;

// }

// document.querySelector('#btn-1').onclick = () => {
// 	let i = document.querySelector('#i2').value;
// 	console.log(i);
// 	let myCheckbox = document.querySelector('#i2');
// 	console.log(myCheckbox.checked);
// 	if (myCheckbox.checked) {
// 		console.log('Нажат');
// 	}
// 	else {
// 		console.log('Отжат');
// 	}
// }

// document.querySelector('#btn-2').onclick = (event) => {
// 	event.preventDefault();
// 	// let text = document.querySelector('#two');
// 	// console.log(text.value);
// 	// text.value = 'one';
// 	let form = document.querySelector('form');
// 	console.log(form);
// 	console.log(form.elements.two.value);
// 	console.log(form.elements.three.value);
// }


// for(старт; работаем пока верно; счетчик ){}

// let div = document.querySelectorAll('.one');
// console.log(div);
// div.style.background = 'red';

// for (i = 0; i < 10; i++) {
// 	if (i == 4) break;
// 	console.log('*********');
// }

// for (let i = 0; i < div.length; i++) {
// 	console.log(i);
// 	div[i].style.background = 'green';
// 	div[i].onclick = two;
// }

// function two() {
// 	console.log('Work!')
// }

// // two();

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i++) {
// 	b[i].style.border = '3px solid black';
// }

// document.querySelector('.b2').onclick = () => {
// 	let r = document.querySelectorAll('input[type="radio"]');
// 	console.log(r);
// 	for (let i = 0; i < r.length; i++) {
// 		if (r[i].checked) {
// 			console.log(r[i].value)
// 		}

// 	}
// }

// let r = document.getElementsByClassName('r');
// for (let i = 0; i < r.length; i++) {
// 	console.log(r[i].checked)
// }

// let out = '';
// for (let i = 0; i < 10; i++) {
// 	out += i + ' ';
// 	if (i == 6) break;
// }
// document.querySelector('#out').innerHTML = out;

let out = document.querySelector('.out');
// for (let i = 0; i < 4; i++) {
// 	for (let j = 0; j < 5; j++) {
// 		out.innerHTML += '*';
// 	}
// 	out.innerHTML += '<br>';
// }

for (let i = 1; i < 10; i++) {
	// out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
	// out.innerHTML += `3 * ${i} = ${3 * i}<br>`
	for (let k = 1; k < 10; k++) {
		out.innerHTML += `${i} * ${k} = ${i * k}<br>`
	}
	out.innerHTML += '<hr>';
}