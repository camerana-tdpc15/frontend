console.log('inizio del file index.js...');

let firstName = 'Pluto';
const pi = 3.14;

let isAvaialable = false;
let generi = ['fantasy', 'horror'];
generi[0] = 'thriller';

const film = {
    titolo: 'ciao ciao Italia',
    anno: 2024,
    generi: ['commedia', 'natale'],
    attori: [
        {
            nome: 'John',
            cognome: 'Pino'
        },
        {
            nome: 'Anna',
            cognome: 'Lina'
        }
    ],

};
film.titolo = 'bye bye Italy';



const listaFilm = [
    {
        id: 1,
        titolo: 'la vita è bella',
        anno: 2024,
        generi: ['commedia', 'natale'],
        attori: [
            {
                nome: 'John',
                cognome: 'Pino'
            },
            {
                nome: 'Anna',
                cognome: 'Lina'
            }
        ],
    },
    {
        id: 2,
        titolo: 'il miglio verde',
        anno: 2024,
        generi: ['commedia', 'natale'],
        attori: [
            {
                nome: 'John',
                cognome: 'Pino'
            }
        ],
    }
];

// il film con id 1 è la vita è bella
// console.log(`il film con id ${listaFilm[0].id} è ${listaFilm[0].titolo}`);
// console.log(`il film con id ${listaFilm[0].id} è del ${listaFilm[0].anno}`);
// console.log(`il film con id ${listaFilm[0].id} ha i generi ${listaFilm[0].generi}`);

// logInfoFilm(listaFilm[0]);
// logInfoFilm(listaFilm[1]);

/*
for pippo in listaFilm:
    ...
*/

for (let i = 0; i < listaFilm.length; i++) {
    logInfoFilm(listaFilm[i]);
}

for (f of listaFilm) {
    logInfoFilm(f);
}

function logInfoFilm(film) {
    console.log(`il film con id ${film.id} è ${film.titolo}`);
    console.log(`anno: ${film.anno}`);
    console.log(`generi: ${film.generi}`);
}

// for(let i = 0; i < 11; i++) {
//     console.log(i); // 0 a 10
// }




let colori = ['blu', 'rosso', 'verde', 'rosa', 'giallo'];

// for(let i = 0; i < colori.length; i++) {
//     console.log(colori[i]);
// }

for(c of colori) {
    console.log(c);
}