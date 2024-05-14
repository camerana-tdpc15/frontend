const url1 = 'https://api.breakingbadquotes.xyz/v1/quotes';
const url2 = 'data/aaa.json';
const main = document.querySelector('#main');




 callAPI(url1, stampaSuDiv);


 function callAPI(url, callback) {
    fetch(url)
    .then(res => res.json())
     .then(data => {
         console.log(data);
         callback(data);
     });
 }

 function stampaSuDiv(libro) {
    main.innerText = libro;
 }