
/* generatore password js */

// chiedi all'utente il suo nome

const userName = prompt ("inserisci il tuo nome");

// chiedi il suo cognome

const userSurname = prompt ("inserisci il tuo cognome");

// chiedi il suo colore preferito

const userColor = prompt ("inserisci il tuo colore preferito");

// codice sulla pagina e sulla console

let password = `Questa è la tua password ${userName}${userSurname}${userColor}23`;

document.getElementById("my_Password") .innerHTML = password;

console.log (password);