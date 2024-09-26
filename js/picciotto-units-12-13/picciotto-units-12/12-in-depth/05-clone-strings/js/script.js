// Write a function cloneStrings() that only clones string properties of an object
// Starting with the example object of the previous exercise this should be the result
// { name: 'Green Mueller',
//  email: 'Rigoberto_Muller47@yahoo.com',
//  address: '575 Aiden Forks',
//  bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
//  bankInformation:
//  { amount: '802.04',
//  business: 'Bernhard, Kuhn and Stehr',
//  name: 'Investment Account 8624',
//  type: 'payment',
//  account: '34889694' }
// }

function cloneString(obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        if(typeof obj[key] === 'string') {
            copy[key] = obj[key];
        } else if(typeof obj[key] === 'object' && obj[key] !== null) {
            copy[key]  = cloneString(obj[key]);
        }
    }

    return copy;
}

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
}

let clonedString = cloneString(original);

clonedString.name = 'Blue Mueller';

// Verify that the original object did not change
console.log("Original:", original.name); 
console.log("Cloned:", clonedString.name);     

// Optionally check the whole object
console.log("Original Object:", original);
console.log("Cloned Object:", clonedString);
