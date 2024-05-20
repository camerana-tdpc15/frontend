// endpoint della web api
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
const urlCocktails = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// elementi della pagina html
const sezioneCards = document.querySelector('#cards-drink');
const inputCocktail = document.querySelector('#input-cocktail');
const btnSearch = document.querySelector('#btn-search');
let cocktailSearched = '';

// gestione eventi
btnSearch.addEventListener('click', function() {
    console.log('btn search cliccato');
    cocktailSearched = inputCocktail.value;
    console.log(cocktailSearched);

    // nuova url da chiamare
    const urlSearched = urlCocktails + cocktailSearched;
    // console.log(urlSearched);

    // pulire la pagina
    cleanCards();

    // chiamare l'api
    callAPI(urlSearched);



});


// logica dell'applicazione
callAPI(urlCocktails);



// funzioni e metodi
function callAPI(url) {

    fetch(url)
    .then(res => res.json())
    .then(data => {

        // cicliamo l'arry che contiene i drinks
        for (d of data.drinks) {
          // per ogni...
          sezioneCards.innerHTML +=  `
          <div class="col-lg-3 mb-4">
                <!-- singola card -->
                <div class="card" style="width:100%">
                    <img class="card-img-top"
                        src="${d.strDrinkThumb}"
                        alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${d.strDrink}
                            <span>(${d.strAlcoholic})</span>
                        </h4>                    
                        <p class="card-text">
                            <b>Categoria: </b>${d.strCategory}
                        </p>
                        <button class="btn btn-primary" data-bs-toggle="collapse"
                            data-bs-target="#D${d.idDrink}">Instructions...</button>
                        <!-- per fare collassare solo 1 elemento, l'id
                            deve essere univoco.. e deve iniziare per lettera
                            usiamo la proprieta' univoca id del drink preceduta
                            da un qualsiasi carattere
                        -->
                        <div id="D${d.idDrink}" class="collapse">
                            <p>${d.strInstructions}</p>
                        </div>
                    </div>
                </div>
            </div>
          `;
        }

    });

}


function cleanCards() {
    sezioneCards.innerHTML = '';
    // ripulire l'input cercato dall'utente
    inputCocktail.value = '';
}