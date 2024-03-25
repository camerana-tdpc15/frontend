
const btnCrea = document.getElementById('btn-crea');
const btnElimina = document.getElementById('btn-elimina');
const btnCreaImg = document.getElementById('btn-crea-img');
const contenitore = document.getElementById('contenuto');

btnCrea.onclick = function() {

    // creazione di un elemento p
    const nuovoParagrafo = document.createElement('p');

    // inseriamo del contenuto nel p
    nuovoParagrafo.innerText = 'ciao sono stato creato nel js';
    nuovoParagrafo.classList.add('scritte-rosse');
    nuovoParagrafo.classList.remove('speciale');


    // inserire elemento p nell'html
    contenitore.appendChild(nuovoParagrafo);

}

btnElimina.onclick = function() {
    const p = document.getElementsByTagName('p')[0];
    p.remove();

    // cancella i primi 2 paragrafi
    // const paragrafi = document.getElementsByTagName('p');
    // paragrafi[0].remove();
    // paragrafi[1].remove();

    // cancella l'ultimo paragrafo
    const paragrafi = document.getElementsByTagName('p');
    const indiceUltimoElem = paragrafi.length -1;
    paragrafi[indiceUltimoElem].remove();
}

btnCreaImg.onclick = creaImmagineIlMac;

function creaImmagineIlMac() {
    const img = document.createElement('img');
    img.src = 'https://us-tuna-sounds-images.voicemod.net/237884b0-b460-4e81-8a2e-710c0565c144-1700170380474.jpg';
    img.style.width = '200px';
    img.style.height = '200px';
    img.classList.add('imaginiBelle');
    img.classList.remove('altro');
    contenitore.appendChild(img);
}


/*
    ESERCIZIO: rifare lista spesa con 
    createElement, appendChild, remove (eliminare ultima voce inserita)
*/