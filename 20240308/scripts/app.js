console.log('inizio file app.js');

const pi = 3.14;
// pi = 5;

let firstName = 'Pippo';
let lastName = 'Pallino';
let isAlive = true;

// console.log(firstName); 
// il nome dell'utente è Pippo!

// 1. concatenazione di stringhe:
console.log('il nome dell\' utente è ' + firstName + '!');

// 2. template string (alt+96) backtick
// il nome dell'utente è Pippo e il cognome è Paolino!
console.log(`il nome dell'utente è ${firstName} e il cognome è ${lastName}!`);




let favColors = ['rosso', 'verde', 'giallo'];
let estrazione = [2, 45, 67, 21];

console.log(favColors);
console.log(favColors[0]);

console.log(`il colore preferito dell'utente è il ${favColors[1]}...`);
favColors[1] = 'blu';
// il colore preferito dell'utente è il verde...
console.log(`il colore preferito dell'utente è il ${favColors[1]}...`);



// let brand = 'FIAT';
// let model = '500';
// let color = 'white';
// let hp = 42;
// let alimentaz = ['benzia', 'gpl'];

let automobile = {
    brand: 'FIAT',
    model: '500',
    color: 'white',
    hp: 42,
    alimentaz: ['benzina', 'gpl'],
    proprietario: {
        nome: 'Walter',
        cognome: 'White',
        eta: 60,
        occupazione: ['insegnate di chimica', 'cuoco'],
        residenza: {
            citta: 'Torino',
            cap: 10100
        }
    }
};

let automobile2 = {
    brand: 'AUDI',
    model: 'TT',
    alimentaz: ['diesel']
};

let listaAuto = [automobile, automobile2];

console.log(automobile);
console.log(`il modello è: ${automobile.model}`);
// console.log(`il modello è: ${automobile['model']}`);
console.log(automobile.alimentaz[1]); // gpl
console.log(automobile.proprietario.nome); // White


const libro = {
    titolo: 'Il signore degli anello',
    autore: {
        nome: 'J.R.R.',
        cognome: 'Tolkien'
    },
    immagineCopertina: 'https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/EzAAAOSw3iRe42Nn/$_12.JPG?set_id=880000500F',
    numeroPagine: 4034,
    generi: ['fantasy', 'avventura']
};

// libro = 'ciao';
libro.titolo = 'il signore degli anelli';

console.log(libro.titolo);