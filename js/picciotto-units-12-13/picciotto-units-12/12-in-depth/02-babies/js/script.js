// 2.Babies
// ● Create an empty array of babies
// ● Each baby should have the following properties
// ○ "name" (a string)
// ○ "months" (age in months as number)
// ○ "noises" (an array of strings)
// ○ "favoriteFoods" (an array of strings)
// ● Add 4 different babies to the array using as many different ways as possible
// ● Iterate through the array printing key and value pairs e.g [name:”Lyla”]
// ● Now add an "outfit" property to each baby in the array
// ○ Outfit should describes at least 3 parts of their clothing using different properties, for
// example, "shirt": "blue"
// ○ Print each baby again with their outfit in a nicely formatted object



/**
 * The `Baby` constructor function creates objects representing babies with properties for name, age in
 * months, noises they make, and favorite foods.
 * @param name - The name of the baby.
 * @param months - The `months` parameter in the `Baby` constructor represents the age of the baby in
 * months.
 * @param noises - The `noises` parameter in the `Baby` constructor likely refers to the sounds or
 * noises that the baby makes. This could include sounds like crying, cooing, babbling, laughing, etc.
 * @param favoriteFoods - The `favoriteFoods` parameter in the `Baby` constructor is used to store an
 * array of the baby's favorite foods. This allows you to keep track of what foods the baby enjoys
 * eating.
 */
// Baby constructor
function Baby(name, months, noises, favoriteFoods) {
    this.name = name;
    this.months = months;
    this.noises = noises;
    this.favoriteFoods = favoriteFoods;
}

// Create an empty array of babies
const babies = [];

// Different ways to create and add babies to the array

// 1. Using newBaby function to create a baby and add it
function newBaby(name, months, noises, favoriteFoods) {
    let baby = new Baby(name, months, noises, favoriteFoods);
    return baby;
}
babies.push(newBaby('Samanta Cristoforetti', 2, ['hi', 'ah', 'uh?'], ['moonrock', 'cereali', 'latte']));

// 2. Using object literal and directly pushing into the array
babies.push(new Baby('Ivan Drago', 3, ['ghididighi', 'ajo'], ['pizza', 'crauti']));

// 3. Using an object and then adding to the array
const baby3 = {
    name: 'Lyla',
    months: 1,
    noises: ['goo', 'gaa'],
    favoriteFoods: ['gin', 'martini']
};
babies.push(new Baby(baby3.name, baby3.months, baby3.noises, baby3.favoriteFoods));


// Iterate through the array printing key and value pairs
console.log("Babies key-value pairs:");
babies.forEach((baby) => {
    for (let key in baby) {
        console.log(`[${key}: "${baby[key]}"]`);
    }    
    console.log('---');
});

// Adding outfit property to each baby
babies.forEach(baby => {
    baby.outfit = {
        shirt: 'blue',
        pants: 'white',
        shoes: 'red'
    };
});

// Printing each baby with outfit in a formatted object
console.log("Babies with outfits:");
babies.forEach(baby => {
    console.log(baby);
});

