//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array. Stampa l'array alla fine.

let arrayNumeriDispari = []

for (let i = 0; i < 6; i++) {
    //INPUT UTENTE
let numeroInputUtente = prompt("Inserisci un numero");
//SE DISPARI PUSH NELL'ARRAY
if (numeroInputUtente%2 == 1){
    arrayNumeriDispari.push(numeroInputUtente);
}
};
//STAMPA L'ARRAY
console.log(arrayNumeriDispari);
alert(arrayNumeriDispari);