//Chiedere all'utente il numero di km che vuole percorrere
var kmUtente = prompt('Quanti km devi percorrere?');
console.log(kmUtente);
// Chiedere all'utente la propria età
var etaUtente = prompt('Quanti anni hai?');
console.log(etaUtente);
// Calcolare il prezzo del biglietto sapendo che ogni km viene 0,21 €
var kmPrice = 0.21;
var prezzoBiglietto = kmUtente * kmPrice;
// Dividere gli utenti per range di età : sotto i 18 o sopra i 65
// Per gli utenti over 65 viene applicato lo sconto del 40%
if (etaUtente < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8;
} else if (etaUtente > 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
}
console.log('Prezzo biglietto: ' + prezzoBiglietto);
// Per gli utenti over 65 viene applicato lo sconto del 40%

// var scontoUnder18 = ((kmPrice * 20) / 100);
// var scontoOver65 = ((kmPrice * 40) / 100);
// var prezzoBiglietto = (kmUtente * (kmPrice - scontoUnder18));
