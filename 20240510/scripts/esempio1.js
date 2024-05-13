console.log('file js...');

// let user = 'Anna';

// const contenitore = document.getElementById('contenitore');
// const p = document.createElement('p');
// p.innerText = user;
// contenitore.appendChild(p);

// const employees = [
//     {
//         firstName: 'Pippo',
//         lastName: 'Rossi'
//     },
//     {
//         firstName: 'Pluto',
//         lastName: 'Verdi'
//     }
// ];


// 1. PASSARE DA OGGETTO JS A STRINGA CON JSON
//    (mandare dati dalla nostra app => esterno/server/web app)

// const libro = {
//     id: 555,
//     title: 'bianco, rosso e verde',
//     author: 'Pippo Verdino',
//     pages: 654
// };

// console.log(libro);

// const libroStringa = JSON.stringify(libro);

// console.log(libroStringa);



// 2.PASSARE DA UNA STRINGA CHE CI ARRIVA DALL'ESTERNO A UN OGGETTO JS
//    (ricevere dati da <= esterno/server/web app e usarli nel nostro frontend)
const extString = `
    {
        "id":789,
        "title": "nuovo libro",
        "author": "Manilo Risetti"
    }
`;

console.log(extString);

const libroJs = JSON.parse(extString);

console.log(libroJs);

/*

    F.E.  ->   B.E.  ->    DB.

    F.E.       B.E.  <-    DB.

    F.E.  <-   B.E.        DB.

*/

// PER VALIDARE I JSON, AD ESEMPIO: https://jsonlint.com/