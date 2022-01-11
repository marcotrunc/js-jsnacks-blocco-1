console.log('JS OK!')
/*L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga.*/
// * Chiedo le due parole all'utente
const firstWord = prompt('Inserisci la prima parola', 'pippo').trim();
const secondWord = prompt('Inserisci la seconda parola', 'paperino').trim();
const displayElement = document.getElementById('display');

const lengthFirstWord = firstWord.length;
const lengthSecondWord = secondWord.length;
let     message = 'Le due parole hanno la stessa lunghezza';
//  * Validazione
if(firstWord.length === 0 || secondWord.length === 0){
    message = 'Devi inserire 2 parole';
}   else{
// * Verifico quale delle due è più lunghe
    if(lengthFirstWord > lengthSecondWord){
    message = secondWord + ' ' + firstWord;
}   else if(lengthFirstWord < lengthSecondWord){
    message = firstWord + ' ' + secondWord
    }
}   
// * Stampo prima la più lunga e poi la più corta
displayElement.innerHTML = `
<div>
    <h1>${message}</h1>
</div>`;