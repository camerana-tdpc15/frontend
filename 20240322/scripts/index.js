const par1 = document.getElementById('uno');
const paragrafi = document.getElementsByTagName('p');
const paragrafiSpeciali = document.getElementsByClassName('speciale');

console.log(paragrafiSpeciali);

// errore! non possiamo perche' stiamo trattando una 
// collezione di elementi
// paragrafi.style.color = 'red';

//paragrafi[2].style.color = 'red';

for(p of paragrafi) {
    p.style.color = 'red';
}

for(let i = 0; i < paragrafi.length; i++) {
    paragrafi[i].style.color = 'blue';
}

for(let i = 0; i < paragrafiSpeciali.length; i++) {
    // paragrafiSpeciali[i].style.backgroundColor = 'yellow';
    paragrafiSpeciali[i].classList.add('evidenzia');
}

// let numeri = [1, 4, 42];
// numeri.forEach(function(n) {
//     console.log(n);
// });


/////////////////////////////////////
const btn = document.getElementsByTagName('button');
const inputNomeUtente = document.getElementById('nomeUtente');
inputNomeUtente.value = 'Marc';

btn[0].onclick = function() {
    console.log(inputNomeUtente.value);
}


// ESERCIZIO: creare un app di lista della spesa
// ul popolato dinamicamente con js con degli li
// i dati vengono letti da un input popolato dall'utente


