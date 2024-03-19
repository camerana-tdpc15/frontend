console.log('inizio file js');

const generi = ['classico', 'rock', 'pop'];

// for(let i = 0; i < generi.length; i++) {
//     console.log(generi[i]);
// }

for (g of generi) {
    console.log(g);
}


// creare le variabili che contengono button e paragrafo
const btnColora = document.getElementById('btnColora');
const btnReset = document.getElementById('btnReset');
const p = document.getElementById('primoPar');


// gestire l'evento di click sul button

// funzione anonima
// btnColora.onclick = function() {
//     p.style.color = 'red';
//     p.style.backgroundColor = 'yellow';
//     p.style.fontSize = '30px';
// }


// btnReset.onclick = function() {
//     p.style.color = 'black';
//     p.style.backgroundColor = '';
//     p.style.fontSize = '';
// }

btnColora.onclick = colora;
btnReset.onclick = sbianca;

function colora() {
    p.style.color = 'red';
    p.style.backgroundColor = 'yellow';
    p.style.fontSize = '30px';
}

function sbianca() {
    p.style.color = 'black';
    p.style.backgroundColor = '';
    p.style.fontSize = '';
}