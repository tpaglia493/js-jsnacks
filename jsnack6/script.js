//Fate generare un numero random da 0 a 10 al computer, e chiedete
//all'utente di inserire un suo numero. Se il numero scelto dall'utente è
//uguale al numero del computer informate l'utente che ha vinto, altrimenti
//ha perso.


//RANDOM GENERATED NUMBER
let randomNumber = Math.ceil(Math.random()*10);

//NUMBER CHOSEN BY USER
let userChosenNumber = prompt("What number between 1 and 10 am I thinking?");

console.log("CPU choice: " + randomNumber );
console.log("USER choice: " + userChosenNumber );

//IF STATEMENT TO CHECK EQUALITY
if (userChosenNumber==randomNumber){
    console.log("CORRECT!!");
    alert("CORRECT!!");
} else{
    console.log("Maybe next time");
    alert("Maybe next time");
}
