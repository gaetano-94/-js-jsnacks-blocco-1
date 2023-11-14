'use strict';

/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
*/

let numeroN = Number(prompt('inserisci un numero'));

for (let i = 0; i < numeroN; i++) {
  let numeriN = [];

  for (let y = 0; y < 10; y++) {
    let numeriCasuali = Math.floor(Math.random() * 100) + 1;
    numeriN.push(numeriCasuali);
  }

  console.log(numeriN);
}
