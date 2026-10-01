// Skaitļu funkcijas

let skaitlis1 = 20;

let rezultats = Math.pow(skaitlis1,5); 
    rezultats = Math.sqrt(skaitlis1);
    rezultats = Math.round(rezultats);


    function fonaMaina(){
        rezultats = Math.round(Math.random()*360);
        document.body.style.background = `hsl(${rezultats},100%,50%)`;
    }

    // setInterval(fonaMaina,300)
    

    // teksta funkcijas

    let teksts1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";


    rezultats = teksts1.length;
    rezultats = teksts1.toUpperCase();
    rezultats = teksts1.toLowerCase();
    rezultats = teksts1.split(".");
    rezultats = teksts1.slice(45,90);
    rezultats = teksts1.replaceAll("L","*RMMT*");
    rezultats = teksts1.repeat(100);
    rezultats = teksts1.search("Ipsum");
    rezultats = teksts1.trim();


    // Cikli


    // for(let i=0;i<100;i++){
    //     document.body.innerHTML += i + "<br>";
    // }


    // for(let i=100;i>=0;i--){
    //     document.body.innerHTML += i + "<br>";
    // }



    const menesi = [
            "Janvāris",
            "Februāris",
            "Marts",
            "Aprīlis",
            "Maijs",
            "Jūnijs",
            "Jūlijs",
            "Augusts",
            "Septembris",
            "Oktobris",
            "Novembris",
            "Decembris"
        ];
    

        // for(let menesis of menesi){
        //     document.body.innerHTML += `<h2>${menesis}</h2>`;

        // }



        let bilzuSkaits = prompt('Cik bildes???');

        for(let i =0;i<bilzuSkaits;i++){
            document.body.innerHTML +=`
                <img src="https://picsum.photos/id/${i}/300" onclick="palielinatBildi(this)">
            `

        }



// document.body.innerHTML += rezultats;

// Funkcijas

function manaFunkcija(elements){
    // elements.classList.toggle('lieli_burti')
}


function palielinatBildi(elements){
    elements.classList.toggle('liela_Bilde')
}

document.body.onclick = (e)=>{
    manaFunkcija(e.target);
}



// 