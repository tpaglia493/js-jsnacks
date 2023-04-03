//In un array sono contenuti i nomi degli invitati alla festa del grande
//Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

let listaInvitati = ["Io", "Mario", "Franco", "Michele", "sono il proprietario di casa fammi entrare"];

let nomeInvitato = prompt("Il suo nome, prego");

let sullaLista = false;

//ALGORITMO DI RICERCA NELLA STRINGA
for (let i = 0; i < listaInvitati.length; i++) {

    //INTERRUZIONE DEL CICLO FOR SE IL NOME COINCIDE CON LA LISTA
    if (nomeInvitato == listaInvitati[i]) {
        sullaLista = true;
        break;
    };   
};

//OUTPUT DI PRESENZA O MENO NELLA LISTA
if (sullaLista == false) {
    console.log("Mi dispiace ma non è sulla lista");
    alert("Mi dispiace ma non è sulla lista");
} else {
    console.log("Prego si accomodi");
    alert("Prego si accomodi");
}