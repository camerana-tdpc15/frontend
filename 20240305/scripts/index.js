console.log('questo è un file js external');

let firstName = 'Pippo';
// concatenazione di stringhe:
console.log('nome utente: ' + firstName + '!'); // nome utente: Pippo!

const lastName = 'Rossi';

// backtick ALT+96 ``
// template string:
console.log(`cognome utente: ${lastName}!`);

console.log(`nome: ${firstName}, cognome: ${lastName}`);
// console.log('nome: ' + firstName + ', cognome: ' + lastName);

let age = 60;
console.log(age);

console.log(1 + 1); // 2
console.log(42 + age); // 102

let city = '';
console.log(`citta: ${city}`);

city = 'Torino';

console.log('${city}');

let mediaVoti = [ 5, 3, 2, 4, 7 ];
// mediaVoti = 'ciao';

console.log(mediaVoti);
console.log(mediaVoti.length);

console.log(mediaVoti[0]);
console.log(`ultimo voto: ${mediaVoti[4]}`);

let persona = {
    fName: 'Walter',
    lName: 'White',
    isAlive: false,
    age: 60,
    coloreCapelli: null,
    work: ['insegnate di chimica', 'cuoco']
};

const book = {
    id: 1,
    titolo: 'il miglio verde',
    autore: {
        nome: 'dsjk',
        cognome: 'kdsjfk'
    },
    numeroPagine: 656,
    generi: ['giallo', 'thriller']
};

const auto = {
    id: 42,
    brand: 'FIAT',
    modello: 'Panda',
    colore: 'giallo',
    cilindrata: 42,
    targa: 'AA007ZZ',
    alimentazione: ['benzina', 'gpl'],
    proprietario: {
        nome: 'aa',
        cognome: 'bb',
        residenza: [
            {
                city: 'Torino',
                cap: 10100
            },
            {
                city: 'Roma',
                cap: 456644
            }
        ]
    }
};

console.log(auto);
console.log(auto.targa);
console.log(auto.alimentazione[0]);

let x = auto.proprietario.residenza[1].city;
console.log(x);