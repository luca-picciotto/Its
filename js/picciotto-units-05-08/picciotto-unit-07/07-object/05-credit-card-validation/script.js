function validateCreditCard(cardNumber) {

    //rimuovere i trattini dalla stringa
    cardNumber = cardNumber.replace(/-/g, '');

    //Oggetto per il risultato della validazione
    const result = {
        number: cardNumber,
        valid: false,
        error: ""
    }

    //Il numero deve essere composto da 16 cifre e devono essere tutti numeri
    if (!/^\d{16}$/.test(cardNumber)) {
        result.error = "Lunghezza errata";
        return result;
    }

    //Rappresentare almeno 2 cifre diverse (non tutte le cifre possono essere uguali)
    if (/^(\d)\1+$/.test(cardNumber)) {
        result.error = "Cifre uguali";
        return result;
    }

    //La cifra finale deve essere pari
    if (cardNumber.charAt(15) % 2 !== 0) {
        result.error = "Il numero è dispari"
        return result;
    }

    //La somma di tutte le cifre deve essere maggiore di 16
    let somma = 0;

    for (let i = 0; i < cardNumber.length; i++) {

        somma +=cardNumber.charAt(i);
    }

    if (somma <= 16) {
        result.error = "Somma minore di 16";
        return result;
    }

    result.valid = true;
    return result;
}

/*-----------------result 1-------------------------*/
console.log("================================");
console.log("= number : 1111-1111-1111-1111");
let result1 = validateCreditCard('1111-1111-1111-1111');

console.log("= valid : " + result1.valid + " =");
if (!result1.valid) {
    console.log('= error : ' + result1.error + " =");
}
console.log("================================");
/*-------------------result 2-----------------------*/
console.log("================================");
console.log("= number : 1234-5678-9012-3458");
let result2 = validateCreditCard('1234-5678-9012-3458');

console.log("= valid : " + result2.valid + " =");
if (!result2.valid) {
    console.log('= error : ' + result2.error + " =");
}
console.log("================================");
/*---------------------result 3--------------------*/
console.log("================================");
console.log("= number : 6666-6666-6666-1666");
let result3 = validateCreditCard('1234-5678-9012-3458');

console.log("= valid : " + result3.valid + " =");
if (!result3.valid) {
    console.log('= error : ' + result3.error + " =");
}
console.log("================================");



