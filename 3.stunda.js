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
// outDiv.style.height = "50px";

// 3. CSS klases pievienošana/noņemšana/pārslēgšana

// .danger

document.body.classList.add('danger');
document.body.classList.add('black');

document.body.classList.remove('danger');

virsraksts.onclick = ()=>{virsraksts.classList.toggle('kustiba')}


// 4. Elementu atribūtu maiņa

let img = document.querySelector('img');

img.src = "https://picsum.photos/400";
img.alt = "Mana bilde";


function randomBilde(){
    bildesNumurs = (Math.random()*255).toFixed(0);
    img.src = `https://picsum.photos/id/${bildesNumurs}/400`;
}

setInterval(randomBilde,10000)


// 5. Notikumi

btn1.onclick = ()=>{randomBilde()}
btn2.onclick = ()=>{document.body.classList.toggle('black')}

document.body.onkeydown = (event)=>{
    console.log(event);

    // code: 'Space'

    if(event.code=='Space'){
        let hue = (Math.random()*360).toFixed(0);
        document.body.style.background = `hsl(${hue},100%,50%)`;
         document.body.style.transition = "0.5s linear"

    }

     if(event.code=='Escape'){
         document.body.style = ""
    }
}



// 6. elementa teksta satura maiņa un HTML koda pievienošana

virsraksts.textContent = "Jauns teksts ar JS";

for(rindkopa of rindkopas){
    rindkopa.textContent = virsraksts.textContent
}


for(let i=0;i<100;i++){
    outDiv.innerHTML += `
        <div class="card">
            <h3>Kartiņa ${i+1}</h3>
            <p>Rindkopa ${i+1}</p>
        </div>    
    `;
}