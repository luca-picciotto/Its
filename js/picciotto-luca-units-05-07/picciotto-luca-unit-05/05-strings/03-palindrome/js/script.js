function reverse(word){
    let reversedWord = "";
    for(let i = word.length - 1; i >= 0; i--){
        reversedWord += word.charAt(i);
    }
    return reversedWord;
}

function checkPalindrome(word){
    let isPalindrome = false;
    let wordReverse  = reverse(word);
    if(word === wordReverse){
        isPalindrome = true;
    }

    if(isPalindrome == true){
        console.log(word + " is palindrome");
    } else{
        console.log(word + " is not palindrome");
    }
}


checkPalindrome("hello");
checkPalindrome("madam");
checkPalindrome("saippuakivikauppias");
checkPalindrome("saibpuakivikauppias");
