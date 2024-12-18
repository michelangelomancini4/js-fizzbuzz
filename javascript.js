// Scrivi un programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log("il valore di i è: ", i);
    // per i multipli di 3 stampi “Fizz” al posto del numero
    if (i % 3 === 0){
        console.log ("il valore di i è: ", "Fizz");
    }
    // per i multipli di 5 stampi Buzz
    else if (i % 5 === 0){
        console.log("il valore di i è: ", "Buzz");
    }
   // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
     if (i % 3 === 0 && i % 5 === 0) { 
        console.log("il valore di i è: ", "FizzBuzz");
    }
    

}


   
   
