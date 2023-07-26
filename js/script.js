
const firstNumber = parseInt(prompt("digita il primo numero"));
const secondNumber = parseInt(prompt("digita il secondo numero"));



//   let random = Math.floor(Math.random() * (secondNumber - firstNumber) + firstNumber);
//  let random = Math.floor(Math.random() * (firstNumber - secondNumber)) + secondNumber;



 console.log ('random' + random);
 console.log ('primo' + firstNumber);
 console.log ('secondo' + secondNumber);

 const prima = prompt("parola 1");
 const seconda = prompt("parola 2");

 if(prima.length == seconda.length){
     alert(prima + seconda)

 }

 else if(prima.length > seconda.length){
     alert(prima)/ }

 else{
     alert(seconda)

    
 }

 const numb = [];

 let somma = 0;

 while(somma < 50){
    
    
     userNumb= parseInt(prompt("inserisci"));
    
     somma += userNumb;
    
     numb.push(somma);
    
     console.log("somma: " + somma);
    
 }

 media = somma / numb.length;

 console.table(numb);



console.log(media);

//  Trovare gli errori nel seguente codice:


     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
     let evenNumbers = [];
     for (let i = 0; i < numbers.length -1; i++) {
         if (numbers[i] % 2 == 0) {
             evenNumbers.push(i);
         }
     }
     console.log(evenNumbers);

    //  dovrebbe restituire [1,3,5]	
