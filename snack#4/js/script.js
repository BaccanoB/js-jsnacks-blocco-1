// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

// Lista di nomi

var listaNomi = ["Beatrice", "Giovanni", "Laura", "Valerio", "Francesco"]
console.log(listaNomi);

// lista di cognomi

var listaCognomi = ["Baccano", "Rossi", "Verdi", "Bianchi", "Viola"]
console.log(listaCognomi);

// selezionare un nome casuale dalla lista

function generatoreNome(nomi,cognomi){

    var randomNome = nomi[Math.floor(Math.random()*nomi.length)];
    console.log("Nome Random",randomNome);

    var randomCognome = cognomi[Math.floor(Math.random()*cognomi.length)];
    console.log("Cognome Random",randomCognome);

    var nomeCasuale = randomNome + " " + randomCognome;

    return nomeCasuale;
}

for (var i = 0; i < 10; i++){
    
    var nomeCasuale =  generatoreNome(listaNomi,listaCognomi);
    console.log("Nome Casuale",nomeCasuale);
    document.getElementById("lista").innerHTML += "<li>" + nomeCasuale + "</li>";
}
