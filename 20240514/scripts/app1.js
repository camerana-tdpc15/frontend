const urlBBQuote = 'https://api.breakingbadquotes.xyz/v1/quotes';

const btnRandomQuote = document.querySelector('button');
const quoteContainer = document.querySelector('#quote');

// btnRandomQuote.onclick = function() {
//     console.log('perchee funzioni?')
// }

btnRandomQuote.addEventListener('click', function() {
    callAPI(urlBBQuote, printQuote);
});

function callAPI(url, callback) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        callback(data);
    });
}

function printQuote(quote) {
    quoteContainer.innerHTML = `
        <p>
            <b>Citazione:</b>
            ${quote[0].quote}
        </p>
        <p>
            <b>Autore:</b>
            ${quote[0].author}
        </p>
    `;
}

