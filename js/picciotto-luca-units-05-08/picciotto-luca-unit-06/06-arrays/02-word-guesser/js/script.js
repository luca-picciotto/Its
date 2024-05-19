const wordToGuess = ['T','R','E','E'];
let wordEmpty = ['_', '_', '_', '_'];


function guessLetter(character){
    let numberOfAttempt = 3;
    while(numberOfAttempt > 0){
        let position = wordToGuess.indexOf(character);

        if(position >= 0){
            wordEmpty[position] = character;
            console.log("Found!");
            break;
        } else{
            console.log("Not found!");
            numberOfAttempt--;
            break;
        }
    }
    if(numberOfAttempt == 0){
        console.log("Your attemps are 0! ");
    }
}
guessLetter('T');
console.log(wordEmpty);
guessLetter('F');
console.log(wordEmpty);
guessLetter('e');
console.log(wordEmpty);
guessLetter('E');
console.log(wordEmpty);
guessLetter('R');
console.log(wordEmpty);
guessLetter('e');
console.log(wordEmpty);
guessLetter('r');
console.log(wordEmpty);
guessLetter('E');
console.log(wordEmpty);
