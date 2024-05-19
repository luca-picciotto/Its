function printReverse(word){
    let reversedWord = "";
    for(let i = word.length - 1; i >= 0; i--){
        reversedWord += word.charAt(i);
    }
    console.log(reversedWord);
}


printReverse("hello");
printReverse("subaru baracca");
printReverse("olleh");