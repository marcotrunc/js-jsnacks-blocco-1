console.log('JS OK!');
/*Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.*/
// * Richiamo elementi in pagina
const displayElement = document.getElementById('display');

let userSum = 0;
let message;
let isValid = true;
// * Chiedere per 10 volte un numero da inserire
for(let i = 0; i < 10; i++){
    const userElement = parseInt(prompt('Inserisci numero','2'));
    console.log(userElement);
    if(isNaN(userElement)){
        isValid = false;
    }else{
        userSum += userElement;
    }
    
}

// * Validazione
   if(isValid){
       displayElement.innerText = `La somma finale è ${userSum}`;
   } else{
       displayElement.innerText ="Inserisci solo numeri!";
   }