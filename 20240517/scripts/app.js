// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

const urlCocktails = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const sezioneCards = document.querySelector('#cards-drink');

const sezione = document.getElementById('cards-drink');
const paragrafi = document.getElementsByTagName('p');
const rosso = document.getElementsByClassName('rosso');

// selezionami l'elemento che ha id...
const sezione2 = document.querySelector('#cards-drink');
// selezionami il primo elemento con tag ...
const paragrafo = document.querySelector('p');
// selezionami il primo elemento con class ...
const rosso2 = document.querySelector('.rosso');

// selezionami tutti gli elementi con tag ...
const paragrafi2 = document.querySelectorAll('p');
// selezionami tutti gli elemtni con class .rosso
const rosso3 = document.querySelectorAll('.rosso');

const inputCocktail = document.querySelector('#input-cocktail');
const btnSearch = document.querySelector('button');

// gestione eventi
btnSearch.addEventListener('click', function() {
    console.log('pippo')
    console.log(inputCocktail.value);
});

fetch(urlCocktails)
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




/*
    
    per ogni drink
        - creare una col da 3 contentente una card
            
*/
