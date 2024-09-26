function reverse(word){
    let reversedWord = "";
    for(let i = word.length - 1; i >= 0; i--){
        reversedWord += word.charAt(i);
    }
    return reversedWord;
}

// Esempi
document.getElementById("reversedString").innerHTML = reverse("hello") + " <br> ";
document.getElementById("reversedString").innerHTML += reverse("subaru baracca") + " <br> ";
document.getElementById("reversedString").innerHTML += reverse("olleh");
