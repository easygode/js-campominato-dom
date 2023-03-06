'use strict';


//<div class="cell">1</div>

//Functions

function createElement (htmlElement, className, htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;

    element.addEventListener ('click', function(){
        alert(htmlValue);
    })

    return element;
}

function appendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}

function campoMinato () {
    let cellNumber = 81;
const containerBoard = document.querySelector('.board');

for(let i = 1; i <= cellNumber; i++){
    const createdElement = createElement('div', 'cell-81', i);
    appendElement(containerBoard, createdElement);
    const button = document.querySelector('.play-btn');
    button.addEventListener('click', function() {
})
}}

//Main

button.addEventListener('click', campoMinato);

let cellNumber = 81;
const containerBoard = document.querySelector('.board');

for(let i = 1; i <= cellNumber; i++){
    const createdElement = createElement('div', 'cell-81', i);
    appendElement(containerBoard, createdElement);
}

const button = document.querySelector('.play-btn');
button.addEventListener('click', function() {
    const play = document.querySelector('.board');
    play.classList.toggle('show');
})

const level = document.querySelectorAll('.select');
level.addEventListener('click', function() {
    const play = document.querySelector('.easy');
    level.classList.add('cell-100');
})

level.addEventListener('click', function() {
    const play = document.querySelector('.medium');
    level.classList.add('cell-81');
})

level.addEventListener('click', function() {
    const play = document.querySelector('.medium');
    level.classList.add('cell-64');
})*/

//1. creare griglia di gioco
//.prendo il contenitore della griglia - board
//. definisco un numero di celle iniziali
//. per ogni numero di cella, creo la cella
//.. la cella deve avere una classe , un contenuto, un evento
//. appendo la cella al contenitore di gioco
//. ci arrivo strada facendo



function createBoard (cellNumber){

    const fragmentBoard = document.createDocumentFragment();

    for(let i = 1; i<= cellNumber; i++){
        const element = document.createElement('div');
        element.classList.add('cell');
        element.style.width = `calc(100% / ${Math.sqrt(cellNumber)})`;
        element.style.width = usando una variabile in CSS --larghezza, 10
        element.style.height = element.style.width;

        element.addEventListener('click, function()') --- cliccato cliccato

        element.innerText = i;
        boardContainer.append(element);
    }
}

return fragmentBoard;

boardContainer.append(fragmentBoard);

function campoMinato() {
    console.log('inizia il gioco');
}

const boardContainer = document.querySelector('.board');
resetGame();
boardContainer.innerHTML = '';
let cellNumber = 100; // TODO: sarà definito da una selezione dell'utente

let level = 1; //1,2,3 //TODO: select da cui reperire il livello 100, 81, 49

//1: facile / 100
//2: facile / 81
//2: facile / 49

//IF / SWITCH

switch (level) {

    case 2:
        cellNumber = 81;
        break;

    case 3:
        cellNumber = 49;
        break;

    case 1:
    default:
        cellNumber = 100;
}


const fragmentBoard = createBoard(cellNumber);


for(let i = 1; i<= cellNumber; i++){
    const element = document.createElement('div');
    element.classList.add('cell');
    element.innerText = i;
    boardContainer.append(element);
}

//LOGICA DEL GIOCO

//1. generaBombe
//2. generaNumeroRandom
//3. controlloNumero


//GENERA BOMBE - Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta
// array - 16
// ciclo - while (bomblist < 16) che riempe l'array

// 

// randomici (funzione)
// che non si ripetano
// []

//EVENTI

//In seguito l'utente clicca su una cella:
//Se il numero è presente nella lista dei numeri generati
//
//abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
//removeEventListener per togliere tutti gli elementi attivati nel addEventListener dall'elemento click (!!STESSA FUNZIONE!!)
//altrimenti ls cella si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

//Array.prototype.includes()  funzione per verificare se un dato è presente nell'array

//o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe)
//numero di celle -  contatore del punteggio ; oppure array di celle cliccate
//rivelare il punteggio: avviene sempre volendo l'unica cosa che cambia è il testo se vinci o perdi
