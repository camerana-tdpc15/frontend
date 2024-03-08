const automobile = {
    brand: 'AUDI',
    model: 'TT',
    alimentaz: ['diesel'],
    velocita: 0,
    accendi: function() {
        console.log('wroooooooooouuum');
    },
    accelera: function() {
        this.velocita += 1;
        console.log(this.velocita);
    },
};

// console.log(automobile);
// automobile.accendi();


let nomeUtente = 'John';
let nomeUtente2 = 'Ben';

let saluto1 = saluta(nomeUtente);
let saluto2 = saluta(nomeUtente2);
console.log(saluto1);
console.log(saluto2);


function salutaGenerico() {
    console.log(`ciao io sono un utente`);
}

function saluta(nome) {
    return `ciao io sono ${nome}`
    // console.log(`ciao io sono ${nome}`);
}


let num1 = 5;
let num2 = 10;

let res = somma(num1, num2);
console.log(res);


function somma(x, y) {
    // logica della funzione:
    // sommare 2 numeri
    // console.log(x + y);
    let risultato = x + y;
    return risultato;
    console.log('fine');
}

