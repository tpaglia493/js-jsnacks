//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore

let num1 = prompt("Inserisci un numero qualsiasi")
let num2 = prompt("inserisci un altro numero (magari non lo stesso di prima)")

if (num1 == num2) {
    console.log("Hai inserito due volte lo stesso numero")
} else if (num1 > num2) {
    console.log(num1 + " è il maggiore")
} else {
    console.log(num2 + " è il maggiore")
}
