// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// Creo l'array vuoto
let userOddNumbers = [];

// Creo la variabile sum
let sum = 0;

// Chiedo al utente un numero finché la somma non raggiunge 50
while(sum < 50) {
    
    // Chiedo un numero al utente
    let userNumbers = prompt('Dammi un numero');

    // Trasformo la stringa del utente in un numero
    let singleNumbers = parseInt(userNumbers);

    // Sommo tutti i numeri 
    sum += singleNumbers;

    // Inserisco nel array tutti i numeri del utente a cui la somma fa 50 o +
    userOddNumbers.push(singleNumbers);

}

// Stampo in console
console.log(userOddNumbers);

