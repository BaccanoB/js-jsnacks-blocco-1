// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

// Lista di nomi

var listaNomi = ["Beatrice", "Giovanni", "Laura", "Valerio", "Francesco"]
console.log(listaNomi);

// lista di cognomi

var listaCognomi = ["Baccano", "Rossi", "Verdi", "Bianchi", "Viola"]
console.log(listaCognomi);

// selezionare un nome casuale dalla lista

var nomeCasuale;

for (var i = 0; i < 10; i++){
    
    var randomNome = listaNomi[Math.floor(Math.random()*listaNomi.length)];
    console.log("Nome Random",randomNome);

    var randomCognome = listaCognomi[Math.floor(Math.random()*listaCognomi.length)];
    console.log("Cognome Random",randomCognome);

    nomeCasuale = randomNome + " " + randomCognome;
    console.log("Nome Casuale",nomeCasuale);
    document.getElementById("lista").innerHTML += "<li>" + nomeCasuale + "</li>";
}


