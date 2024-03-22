// dichiarazioni varibili, elementi, ecc
// const nome = 'Walter';
const nomi = ['Pino', 'Lino', 'Mino', 'Anna'];

const righeTabella = document.getElementById('righe');
const btnInserisciDati = document.getElementById('btn');

let isClcked = false;



// gestione eventi
btnInserisciDati.onclick = function () {
    // esempio su un solo nome
    // righeTabella.innerHTML = `
    // <tr>
    //     <td>${nome}</td>
    // </tr>
    // `;

    // esempio di ciclo su array e stampa su piu' righe
    /*
        1. ciclare la lista
        2. per ogni elemento della stessa:
            2a. creare una riga nella tabella
            2b. inserire il nome prendendolo dall'elemento
        N.B. NON SOVRASCRIVERE I DATI!
        NON CICLARE PIu' DI UNA VOLTA!
    */

    btnInserisciDati.classList.remove('btn-success');
    btnInserisciDati.classList.add('btn-danger');

    if (isClcked == false) {
        for (let i = 0; i < nomi.length; i++) {
            // console.log(nomi[i]);
            righeTabella.innerHTML += `
            <tr>
                <td>${nomi[i]}</td>
            </tr>
            `;
        }

        /*
        PER CASA: riscrivere tutto il ciclo FOR tradizionale e 
        sostituirlo con il for..of 
        */
    }

    isClcked = true;
}

