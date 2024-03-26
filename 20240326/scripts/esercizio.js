const arrayCities = [
    {
        id: 1,
        city: 'Turin',
        description: 'lorem ipsum taurinorum',
        urlImg: 'https://images.pexels.com/photos/12739774/pexels-photo-12739774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 2,
        city: 'Rome',
        description: 'lorem ipsum daje roma',
        urlImg: 'https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-citta-punto-di-riferimento-estate-italia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 3,
        city: 'Venice',
        description: 'lorem ipsum in gondola',
        urlImg: 'https://images.pexels.com/photos/17407338/pexels-photo-17407338/free-photo-of-punto-di-riferimento-edifici-parete-muro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 4,
        city: 'New York',
        description: 'lorem ipsum big apple',
        urlImg: 'https://images.pexels.com/photos/1054417/pexels-photo-1054417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
];

// variabili
let cont = 4;
const rowCities = document.getElementById('row-cities');
const inputCity = document.getElementById('city');
const inputDescription = document.getElementById('description');
const inputUrlImg = document.getElementById('url');

const btnAdd = document.getElementById('btn-add');
btnAdd.onclick = handleClickAdd;

// logica onload/ refresh
printCityCards();



// funzioni 
function handleClickAdd() {

    // verifichiamo se l'utente ha inserito tutti i dati
    if(inputCity.value == '' || inputDescription.value == '' || 
        inputUrlImg.value == '') {
        alert('insert data!!!');
    }
    else {
        // utente ha inserito tutto
        cont += 1; // incrementa di 1 la variabile per l'id
        const newCity = {
            id: cont,
            city: inputCity.value,
            description: inputDescription.value,
            urlImg: inputUrlImg.value,
        };
        arrayCities.push(newCity);
        // console.log(arrayCities);

        rowCities.innerText = '';

        printCityCards();
        emptyInputs();


    }

}

function printCityCards() {

    for (c of arrayCities) {

        rowCities.innerHTML += `
        <div class="col-lg-3">
            <div class="card" style="width:100%">
                <img class="card-img-top"
                    src="${c.urlImg}"
                    alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">${c.city}</h4>
                    <p class="card-text">${c.description}</p>
                    <a href="#" class="btn btn-primary">See City</a>
                </div>
            </div>
        </div>
        `;
    }

}

function emptyInputs() {
    debugger;
    inputCity.value = '';
    inputDescription.value = '';
    inputUrlImg.value = '';
}