'use strict';

/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.
*/

const numeriArray = [];
const inserisciNumero = Number(prompt('inserisci un numero'));

const sommaNumeri = 50;

for (let i = 0; i < sommaNumeri; i++) {
  if (inserisciNumero < sommaNumeri) {
    console.log(inserisciNumero);
  } else {
  }
}
