/**
 * The function allows the user to guess letters in a word and updates the displayed word accordingly,
 * with a limited number of attempts.
 * @param character - The `character` parameter in the `guessLetter` function represents the letter
 * that the player is guessing to be in the word. The function checks if this guessed letter is present
 * in the `wordToGuess` array. If the guessed letter is found in the word, it updates the `wordEmpty
 */
const wordToGuess = ['T','R','E','E'];
let wordEmpty = ['_', '_', '_', '_'];


/**
 * The function `guessLetter` takes a character input, checks if it exists in a word to guess, updates
 * the word display accordingly, and tracks the number of attempts remaining.
 * @param character - The `guessLetter` function you provided seems to be a part of a game where the
 * player tries to guess a letter in a word. The function takes a `character` parameter which
 * represents the letter the player is guessing.
 */
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
/* The code snippet you provided is simulating a guessing game where the player tries to guess letters
in a word. Here's a breakdown of what each `guessLetter` function call is doing: */
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
