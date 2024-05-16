/*
 * Returns "Hello World" in the specified language
 * @param {string} language 
 * @returns {string} "Hello World" in the specified language
 */
function helloWorld(language) {
    switch (language) {
        case 'de':
            return 'Hallo Welt';
            break;
        case 'es':
            return 'Hola Mundo';
            break;
        default: 
            return 'Hello World';
            break;
    }
}

console.log(helloWorld('es'));
console.log(helloWorld('en'));
console.log(helloWorld('de'));