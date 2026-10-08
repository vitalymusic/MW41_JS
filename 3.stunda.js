// 1. elementu atlase no lapas

let virsraksts = document.querySelector('h1');
let rindkopas = document.querySelectorAll('p');
let outDiv = document.querySelector('.out');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');


// 2. elementu stila maiņa
let manaKrasa = "#999"

virsraksts.style.color = manaKrasa;
virsraksts.style.textAlign = "center";
virsraksts.style.border = "2px solid red";

outDiv.style.background="yellow";
outDiv.style.height = "50px";

// 3. CSS klases pievienošana/noņemšana/pārslēgšana

// .danger

document.body.classList.add('danger');
document.body.classList.add('black');

document.body.classList.remove('danger');