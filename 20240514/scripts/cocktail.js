const urlCocktails = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

callAPI(urlCocktails, stampa);

function callAPI(url, callback) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        callback(data);
    });
}

function stampa(cocktails) {
    // console.log(cocktails);
    for(c of cocktails.drinks) {
        console.log(c.strInstructionsIT);
        document.body.innerHTML += `
        <div>${c.strInstructionsIT}</div>
        <hr>
        `
    }
}