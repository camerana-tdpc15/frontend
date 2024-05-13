//CHIAMAT VECCHIO STILE CON XMLHTTPREQUEST

// const req = new XMLHttpRequest();
// req.open("GET", "dati/veicolo.json");
// req.send();
// req.responseType = "json";
// req.onload = function() {
//     const v = req.response;
//     console.log(v);
// }


// COME FARE LE REQUEST CON JAVASCRIPT VANILLA

fetch('dati/veicolo.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });


