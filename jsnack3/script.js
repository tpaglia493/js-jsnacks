//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let totaleSomma = 0;

for(let i=0; i<10; i++){
let numeroDaSommare = prompt("Inserisci un numero");
numeroDaSommare = parseInt(numeroDaSommare)
console.log("Numero"+(i+1)+" - " +numeroDaSommare)
totaleSomma = totaleSomma + numeroDaSommare;
}

console.log("La somma dei numeri inseriti è: "+ totaleSomma)
