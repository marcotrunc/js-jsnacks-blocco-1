console.log('JS OK!')
/*SNACK 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/

// * Recupero elemento in pagina
const display = document.getElementById('display'); 
// * Inserire il primo numero
const firstNumber = parseInt(prompt('Inserisci il primo numero', '6'));
// * Inserire secondo numero
const secondNumber = parseInt(prompt('Inserisci il secondo numero', '4'));
//  * Verificare quale numero è maggiore
let message = `Il numero più alto è ${secondNumber}`;
if(firstNumber > secondNumber){
        message = `Il numero più alto è ${firstNumber}`;
    }else if (firstNumber === secondNumber){
        message = "I due numeri sono uguali!";
}
// * Stampo in console
console.log(message);
// * Stampo in pagina
display.innerHTML = `
<div>
    <h1>${message}</h1>
</div>`;