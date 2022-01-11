console.log('JS OK!');
/*Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.*/
// * Dichiarazioni variabili e richiamo elemento in pagina
const listElement = document.getElementById('display');
const userNumbers = [''];
let userSum = 0;
// * Chiedere per 10 volte 
for(let i = 0; i < 10; i++ ){
    const userElement = parseInt(prompt('Inserisci numero','2'));
    console.log(userElement);
    userNumbers.push(userElement);
    userSum += userElement
}
console.log(userNumbers);
console.log(userSum);