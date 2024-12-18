let text = "il valore di i è: ";

// Scrivi un programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
        
 //  Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz come valore di i

if  (i % 3 === 0 && i % 5 === 0) { 
    console.log(text, "FizzBuzz");
    }
        
    // per i multipli di 3 stampi “Fizz” come valore di i
else  if (i % 3 === 0){
    console.log (text, "Fizz") ;
}
// per i multipli di 5 stampi Buzz
else if (i % 5 === 0){
    console.log(text, "Buzz");
}
// il restante dei numeri restituiscimelo in forma numerica
else {
    console.log(text, i);
}

}


   
   
