const btn = document.getElementById('btn1');
const btnRemove = document.getElementById('btn2');
const par = document.getElementById('par1');

const testoParagrafo = par.innerText;

btn.onclick = function() {
    // console.log(par.classList);
    par.classList.add('rosso');
    par.innerHTML = 'questo è testo che arriva da <b>js</b>...';
}

btnRemove.onclick = function() {
    par.classList.remove('rosso');
    par.innerText = testoParagrafo;
}

/*
    elemento.innerText
    elemento.innerHTML
    elemento.style. nome proprietà css
    elemento.classList.add( ' nome classe da aggiungere ' )
    elemento.classList.remove( ' nome classe da rimuovere ' )
*/

const btnPopolaTabella = document.getElementById('btnPopolaTabella');
const bodyTabella = document.getElementById('bodyTabella');
const nome = 'Pino';
const nomi = ['Pino', 'Lino', 'Mino']

btnPopolaTabella.onclick = function() {
   // prendere il body della tabella e inserire HTML una row con 
   // dentro i dati presenti nella variabile js nome
   bodyTabella.innerHTML = `
    <tr>
        <td>011</td>
        <td>${nome}</td>
    </tr>
   `;

   // ESERCIZIO 2: al click del button,
   // popolare la tabella con n righe quanti sono i personaggi 
   // dentro la variabile array nomi
   // USANDO IL FOR!!!
}