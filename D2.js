/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* RISPOSTA */

let a = 5;
let b = 6;

if (a > b) {
  console.log("a è il numero più grande");
} else {
  console.log("b è il numero più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* RISPOSTA */

let c = 12;

if (c !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* RISPOSTA */

let d = 25;

if (d % 5 === 0) {
  console.log("Il numero è divisibile per 5");
} else {
  console.log("Il numero NON è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* RISPOSTA */

let e = 13;
let f = 5;

if (e === 8 || f === 8 || e - f === 8 || e + f === 8) {
  console.log("La condizione è soddisfatta");
} else {
  console.log("La condizione NON è soddisfatta");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* RISPOSTA */

let totalShoppingCart = 12;

if (totalShoppingCart >= 50) {
  console.log("Complimenti! Hai diritto alla spedizione gratuita");
} else {
  console.log(
    "La spedizione verrà addizionata al carrello per un totale di ",
    totalShoppingCart + 10
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* RISPOSTA */
let totalShoppingCarts = 12;
let sconto = totalShoppingCarts * 0.2;
let totaleScontato = totalShoppingCarts - sconto;

if (totaleScontato >= 50) {
  console.log("Complimenti! Hai diritto alla spedizione gratuita");
} else {
  console.log(
    "La spedizione verrà addizionata al carrello per un totale di ",
    totaleScontato + 10
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* RISPOSTA */
let g = 2;
let h = 11;
let i = 53;
let primo;

if (g >= h && g >= i) {
  primo = g;
} else if (h >= g && h >= i) {
  primo = h;
} else {
  primo = i;
}

let terzo;

if (g <= h && g <= i) {
  terzo = g;
} else if (h <= g && h <= i) {
  terzo = h;
} else {
  terzo = i;
}

let secondo = g + h + i - primo - terzo;

console.log(primo, secondo, terzo);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* RISPOSTA */
let j = 12;

if (typeof j === "number") {
  //se metto Number mi da sbaliato, non so perchè
  console.log("è un numero");
} else {
  console.log("non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* RISPOSTA */
let k = 18;

if (k % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* RISPOSTA */
delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* RISPOSTA */

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* RISPOSTA */

const arrayProva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayProva);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* RISPOSTA */

arrayProva.splice(9, 1, "100");
console.log(arrayProva);
