//Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
//Modificate poi il programma in modo che venga chiesto all'utente il
//numero massimo consentito, e stampare tutta la tabellina del 2 fino al
//numero inserito.

//TABELLINA DEL 2 DA 2 A 1000

for(let i = 1; i<=500; i++){
    console.log(i*2);
};

//TABELLINA DEL 2 DA USERCHOICE A USERCHOICE

        let inizioTabellina = prompt("Scegli un numero da cui far partire la tabellina");
        console.log("Il numero di partenza è: " + inizioTabellina);
        inizioTabellina = parseInt(inizioTabellina);

        let fineTabellina = prompt("Scegli un numero dove terminare la tabellina");
        console.log("L'ultimo numero sarà: " + fineTabellina);
        fineTabellina = parseInt(fineTabellina);

    //TABELLINA DEL 2 DA X COMPRESO A Y COMPRESO (BUG PER NUMERI DISPARI)
        for (let i = inizioTabellina; i <= fineTabellina; i=i+2) {
            console.log(i);
        };

    //TABELLINA DEL 2 DA X*2 A Y*2
        for (let i = inizioTabellina; i <= fineTabellina; i++) {
            console.log(i*2);
        }
