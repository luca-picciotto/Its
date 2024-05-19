/*
● Write a JavaScript function called capital which has one parameter, a string, and which returns 
that string with the first letter capitalized
● For example, the call capital("hello world") should return the string "Hello world"
Bonus
Modify the function so that it capitalizes each word. capital2("my name is john") should return the 
string "My Name Is John"
22

*/

function caption(word){
    let newWord = word.charAt(0).toUpperCase() + word.slice(1);

    console.log(newWord);
    return newWord;
}


caption("subaru baracca");
caption("hello");
