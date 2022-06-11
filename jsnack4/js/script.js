// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Creo le due array
let array1 = [4, 10, 46, 77, 98, 66];
let array2 = [45, 34, 23];

// Creo il loop while con condizione di aggiungere numeri all'array più corto 
// Finchè non raggiuge il numero di elementi esatti che ha l'array più lungo
while(array2.length < array1.length ) {
    // Genero i numeri random 
    let randoNumber = Math.floor(Math.random() * 100) + 1;
    // Li aggiungo sul array più corto
    array2.push(randoNumber);
    
}

// Stampo in console
console.log(array1);
console.log(array2);


