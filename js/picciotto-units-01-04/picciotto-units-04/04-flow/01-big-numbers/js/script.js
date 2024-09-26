/*
 * Returns the greater of two numbers
 * @param {number} num1 
 * @param {number} num2 
 */
function greaterNum (num1, num2) {
    if (num1 > num2) {
        console.log('Il numero maggiore tra ' + num1 + ' e ' + num2 + ' è ' + num1);
    } else {
        console.log('Il numero maggiore tra ' + num1 + ' e ' + num2 + ' è '+ num2);
    }
}

greaterNum (5, 10);
greaterNum (20, 21);