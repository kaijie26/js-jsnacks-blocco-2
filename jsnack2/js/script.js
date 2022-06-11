// Calcola la somma e la media dei primi 10 numeri.

// Creo la variabile sum
let sum = 0;

// Creo i 10 numeri
for(let i = 1; i <= 10; i++) {

    // Scorro i numeri
    let thisNumbers = i;

    // Sommo i primi dieci numeri
    sum += thisNumbers;

}

// Calcolo la media e stampo in console
let media = sum / 10;
console.log(media);



