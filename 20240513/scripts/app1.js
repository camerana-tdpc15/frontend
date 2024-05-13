
// const b = {
//     id: 1,
//     title: 'Il vecchio e il mare',
//     author: {
//         firstName: 'Ernesto',
//         lastName: 'Eminguaio'
//     },
//     cover: 'copertina_libro.jpg',
//     pages: 231,
//     genres: ['thriller', 'adventure']
// };

// console.log(b.author.firstName);
// for(g of b.genres) {
//     console.log(g);
// }

//CHIAMATA VECCHIO STILE CON XMLHTTPREQUEST

// const req = new XMLHttpRequest();
// req.open("GET", "data/book.json");
// req.send();
// req.responseType = "json";
// req.onload = function() {
//     const b = req.response;
//     console.log(b);
// }

// fetch('data/book.json')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data); // data e' un OGGETTO!!!!
//     });

fetch('data/books.json')
    .then(res => res.json())
    .then(data => {
        console.log(data); // data e' un ARRAY!!!!!!!
        for(b of data) {
            console.log(b.title);
        }
    });