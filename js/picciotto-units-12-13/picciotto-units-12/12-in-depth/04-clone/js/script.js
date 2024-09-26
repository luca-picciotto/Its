// Write a function clone() that clones any object
// ● Test it on the object in the next slide
// ● Change the name of the cloned object and make sure that the original did not change
// Important:
// Write the function yourself, do not use built-in functions such as Object.assign(), jQuery.extend() or
// JSON.parse(JSON.stringify())


/**
 * The function `clone` recursively creates a deep copy of an object without using `hasOwnProperty`.
 * @param obj - The `obj` parameter in the `clone` function refers to the object that you want to
 * clone. This function recursively creates a deep copy of the object, meaning it creates a new object
 * with all nested objects and properties also copied rather than just copying references to them. This
 * helps in creating an independent
 * @returns The `clone` function returns a deep copy of the input object `obj`, meaning that it creates
 * a new object with all properties and nested objects copied recursively. This ensures that the cloned
 * object is independent of the original object, preventing any modifications to the clone from
 * affecting the original object.
 */
// Function to clone an object without using hasOwnProperty
function clone(obj) {
    // If the value is not an object or is null, return the value itself
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Create an empty object or array to hold the cloned values
    // Se è un array, creo un nuovo array, altrimenti creo un nuovo oggetto
    let copy = Array.isArray(obj) ? [] : {};

    // Recursively copy properties from the original object to the new one
    for (let key in obj) {
        // Recursion: clone each property (deep copy)
        copy[key] = clone(obj[key]);
    }
    /*
        Riferimento a chat: 
            for (let key in obj) {
                copy[key] = obj[key]; // Simply assign the value
            }

            Differenza tra shallow copy e deep copy:
            Shallow Copy (copia superficiale): Nel caso di una shallow copy, 
            gli oggetti annidati (come bankInformation nell'oggetto original) 
            vengono copiati come riferimento, non come nuovi oggetti. Questo 
            significa che se modifichi un oggetto annidato nel clone, 
            anche l'oggetto originale verrà modificato (e viceversa). 
            Nell'esempio, cambiando il nome di bankInformation nel clone, 
            il nome cambia anche nell'oggetto originale.

            Deep Copy (copia profonda): Una deep copy copia tutti i livelli dell'oggetto, 
            inclusi gli oggetti annidati, creando nuovi oggetti indipendenti. 
            Questo richiede una funzione ricorsiva o un metodo avanzato di clonazione.
    */

    return copy;
}

/* The commented code block you provided is demonstrating the process of cloning an object using the
`clone` function you defined earlier. Here's a breakdown of what each part of the code is doing: */
// The object to clone and test:
let original = {
    name: 'Green Mueller',
    email: 'Rigoberto_Muller47@yahoo.com',
    address: '575 Aiden Forks',
    bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
    active: false,
    salary: 37993,
    birth: new Date('1965-04-18T11:38:00Z'), // Corrected date format for testing
    bankInformation: {
        amount: '802.04',
        date: new Date('2012-02-02T00:00:00Z'), // Corrected date format for testing
        business: 'Bernhard, Kuhn and Stehr',
        name: 'Investment Account 8624',
        type: 'payment',
        account: '34889694'
    }
};

// Clone the object
let cloned = clone(original);

// Change the name of the cloned object
cloned.name = 'Blue Mueller';

// Verify that the original object did not change
console.log("Original:", original.name); 
console.log("Cloned:", cloned.name);     

// Optionally check the whole object
console.log("Original Object:", original);
console.log("Cloned Object:", cloned);
