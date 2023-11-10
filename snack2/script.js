'use strict';

/*
1) L’utente inserisce due parole in successione, con due prompt.
2) Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//1)
const primaParola = prompt('inserisci la prima parola');
const secondaParola = prompt('inserisci la seconda parola');

//2)
const lunghezzaPrimaParola = primaParola.length;
const lunghezzaSecondaParola = secondaParola.length;

//3)
if (lunghezzaPrimaParola < lunghezzaSecondaParola) {
  console.log(primaParola);
  console.log(secondaParola);
} else {
  console.log(secondaParola);
  console.log(primaParola);
}
