// Crea un array vuoto.

var array = [];

// Chiedi per 6 volte all’utente di inserire un numero
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.

// for (var i = 0; i < 6; i++){
//     var numeroUtente = parseInt(prompt("Inserisci qui un    numero"))
//     console.log(numeroUtente);

    // if (numeroUtente % 2 !==0) {
    //     array.push(numeroUtente);
    // }
// }

function numeroDispari(num){
    if (num % 2 !==0) {
        var dispari = true;
    }
    return dispari;
}

for (var i = 0; i < 6; i++){
    var numeroUtente = parseInt(prompt("Inserisci qui un numero"))
    console.log(numeroUtente);

    if (numeroDispari(numeroUtente) == true) {
        array.push(numeroUtente);
    }

}

// Stampa l'array nella console.

console.log(array);