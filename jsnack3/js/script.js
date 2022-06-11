// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Creo la variabile sum
 let sumFor = 0;

// Creo il loop 5 volte
 for(let i = 0; i < 5; i++) {

    // Chiedo al utente un numero
     const userNumber = parseInt(prompt('Inserisci un numero'));

    // Sommo tutti i numeri del utente
     sumFor += userNumber;
    
 }
// Stampo in console
   console.log(sumFor);


// Creo il loop in while   
let i = 0;
let sum = 0;
while (i < 5) {
    // Chiedo il numero al utente
    userNumber = prompt('Inserisci un numero');

    // Trasformo la stringa data dal utente in un numero
    userNumber = parseInt(userNumber);

    // Sommo tutti i numeri del utente
    sum += userNumber;

    i++;
}

// Stampo in console
console.log(sum);




