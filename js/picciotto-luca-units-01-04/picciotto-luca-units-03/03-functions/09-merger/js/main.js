/*
 * Controlla il tipo degli argomenti passati e restituisce la somma (number), la concatenazione (string) o null (altro);
 * @param {undefined} a - the first number
 * @param {undefined} b - the second number
 * @returns {undefined} result - somma, concatenazione, null;
 */
function merger(a, b){
    let result;
    if(typeof a === "number" && typeof b === "number"){
        result = a + b;

        document.getElementById("result-number").innerHTML = "Sum = " + result;
        return result;
    } else if(typeof a === "string" && typeof b === "string"){
        result = a + b;

        document.getElementById("result-string").innerHTML = "String = " + result;
        return result;
    } else {
        result = null;

        document.getElementById("result-null").innerHTML = "Result = " + result;
        return null;
    }
}


merger(3, 5);                   //chiamata delle funzioni   
merger("Ciao", "Mondo");        //chiamata delle funzioni
merger("Vero", true);           //chiamata delle funzioni

