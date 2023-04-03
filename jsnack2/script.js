//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

let parola1 = prompt("Inserisci una parola");
let parola2 = prompt("Inserisci un'altra parola");

let lunghezzaParola1 = parola1.length;
let lunghezzaParola2 = parola2.length;

//HO SBAGLIATO CONSEGNA - QUESTA PARTE STAMPA A CONSOLE LA PAROLA PIU' LUNGA
if(lunghezzaParola1==lunghezzaParola2){
    console.log("Le due parole hanno la stessa lunghezza")
} else if (lunghezzaParola1>lunghezzaParola2){
    console.log(parola1 +" è la parola più lunga")
} else {
    console.log(parola2 +" è la parola è la più lunga")
};

//QUESTA PARTE STAMPA A CONSOLE LA PAROLA PIU' CORTA SEGUITA DALLA PAROLA PIU' LUNGA

if(lunghezzaParola1==lunghezzaParola2){
    console.log("Le due parole hanno la stessa lunghezza")
} else if (lunghezzaParola1<lunghezzaParola2){
    console.log(parola1 + parola2)
} else {
    console.log(parola1 + parola2)
};