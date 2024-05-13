const urlCocktails = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const contenitore = document.getElementById('cards-cocktail');


fetch(urlCocktails)
.then(res => res.json())
.then(data => {
    console.log(data.drinks); // array

    // per ogni cocktail
        for(drink of data.drinks) {
            // creare un div (card)
            contenitore.innerHTML += `
            <div>
                <h1>${drink.strDrink}</h1>
                <h2>${drink.strCategory}}</h2>
                <p>${drink.strInstructionsIT}</p>
                <img src="${drink.strDrinkThumb}" >
            </div>
            `;
                    // creare i vari sotto elementi html contenenti:
                        // nome 
                        // categoria
                        // istruzioni
                        // immagine
        }
       

});