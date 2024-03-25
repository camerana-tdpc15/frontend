// alert('ciao');

/*
    input, button, ul,
    array lista spesa
*/

const inputListaSpesa = document.getElementById('input-voce-lista');
const btnAddItemSpesa = document.getElementsByClassName('btn')[0];
const ulSpesa = document.getElementsByTagName('ul')[0];
let listaSpesa = [];


// gestione degli eventi
btnAddItemSpesa.onclick = function () {
    debugger;

    const item = inputListaSpesa.value;

    if (item == '') {
        alert('non hai inserito nulla');
    }
    else {
        listaSpesa.push(item);
        console.log(listaSpesa);
        stampaListaSpesa();
    }

    /*
    const item = inputListaSpesa.value;

    if (item == '') {
        alert('non hai inserito nulla');
    }
    else {
        console.log(item);
        ulSpesa.innerHTML += `
        <li>${item}</li>
        `;
        inputListaSpesa.value = '';
    }
    */

}


function stampaListaSpesa() {
    ulSpesa.innerHTML = '';
    for(l of listaSpesa) {
        ulSpesa.innerHTML += `
            <li>${l}</li>
        `;
    }
}