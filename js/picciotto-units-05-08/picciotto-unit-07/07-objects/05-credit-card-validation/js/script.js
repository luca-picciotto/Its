function validateCreditCardLength(creditCard){
    let cardLength;
    if(creditCard.length === 16){
        cardLength = true;
    }else{
        cardLength = false;
    }

    return cardLength;
}




// Funzione per testare se una stringa contiene una singola cifra ripetuta almeno due volte
function validateCreditCardDifferentDigits(creditCard) {
    let result = false;
    // Controlla se la stringa è vuota o contiene meno di due caratteri
    if (creditCard.length < 2) {
        result = false;
        return result;
    }

    // Prendi il primo carattere della stringa
    const firstChar = creditCard.charAt(0);

    // Verifica se il primo carattere è una cifra
    if (!isDigit(firstChar)) {
        result = false;
        return result;
    }

    // Controlla che tutti i caratteri siano uguali al primo
    for (let i = 1; i < creditCard.length; i++) {
        if (creditCard[i] !== firstChar) {
            
            result = true;
            return result;
        }
    }

    return result;
}

// Funzione di supporto per verificare se un carattere è una cifra
function isDigit(char) {
    return char >= '0' && char <= '9';
}




function validateCreditCardLastDigit(creditCard){
    let result = false;

    if(creditCard.charAt(creditCard.length-1) %2 === 0){
        result = true;
    }

    return result;
}



function validateCreditCardSum(creditCard){
    let total = 0;
    let result = false;

    for(let i = 0; i < creditCard.length; i++){
        total += creditCard.charAt(i);
    }

    if(total >= 16){
        result = true;
    }

    return result;
}


console.log(validateCreditCardSum("1111111111111"));
console.log(validateCreditCardSum("1111111111111111"));
console.log(validateCreditCardSum("11111111111111111"));