// Using the babies array from the previous exercise:
// ● Write a getBabyOutfit() function that returns a description a baby's outfit
// ○ e.g "Lyla is wearing a blue shirt and red pants and a green hat"
// ● Write a feedBaby() function that prints what a baby is eating.
// ○ e.g. "Lyla is eating food3, food1, food4 and food2"
// ○ All foods in favoriteFoods should appear but randomly each time the function is called
// ● Run both function on all the babies

/**
 * The function `Baby` is a constructor that creates objects representing babies with properties such
 * as name, age in months, noises they make, favorite foods, and outfit.
 * @param name - The name of the baby.
 * @param months - The `months` parameter in the `Baby` constructor represents the age of the baby in
 * months. It is used to store and track the age of the baby in terms of months.
 * @param noises - The `noises` parameter in the `Baby` constructor likely refers to the sounds or
 * noises that the baby makes. This parameter could be an array or a list of different noises that the
 * baby is known to make, such as cooing, crying, babbling, giggling, etc.
 * @param favoriteFoods - Favorite foods are the types of foods that the baby enjoys eating the most.
 * @param outfit - The `outfit` parameter in the `Baby` constructor represents the clothing or attire
 * that the baby is wearing. It could include details such as the type of clothing, colors, patterns,
 * or any accessories the baby is wearing. This parameter allows you to specify the outfit of the baby
 * when creating a
 */
// Baby constructor
function Baby(name, months, noises, favoriteFoods, outfit) {
    this.name = name;
    this.months = months;
    this.noises = noises;
    this.favoriteFoods = favoriteFoods;
    this.outfit = outfit; // Adding outfit as a parameter
}

// Create an empty array of babies
const babies = [];

// Different ways to create and add babies to the array
babies.push(new Baby('Samanta Cristoforetti', 2, ['hi', 'ah', 'uh?'], ['moonrock', 'cereali', 'latte'], { shirt: 'blue', pants: 'white', shoes: 'red' }));
babies.push(new Baby('Ivan Drago', 3, ['ghididighi', 'ajo'], ['pizza', 'crauti'], { shirt: 'red', pants: 'black', shoes: 'white' }));
babies.push(new Baby('Lyla', 1, ['goo', 'gaa'], ['applesauce', 'bananas'], { shirt: 'green', pants: 'yellow', hat: 'blue' }));
babies.push(new Baby('Mila', 4, ['da-da', 'ba-ba'], ['oatmeal', 'carrots', 'peas'], { shirt: 'pink', pants: 'gray', shoes: 'blue' }));

/**
 * The function `getBabyOutfit` generates a description of a baby's outfit based on the provided input
 * object.
 * @param baby - The `baby` parameter is an object that contains information about the baby, including
 * their name and outfit details.
 * @returns The function `getBabyOutfit` returns a string that describes the outfit of a baby. The
 * description includes the baby's name, the type of shirt and pants the baby is wearing, and either
 * shoes or a hat depending on what the baby is wearing.
 */
// Function to get a baby's outfit description
function getBabyOutfit(baby) {
    const outfitDescription = `${baby.name} is wearing a ${baby.outfit.shirt} shirt, ${baby.outfit.pants} pants, and ${baby.outfit.shoes ? baby.outfit.shoes : baby.outfit.hat} ${baby.outfit.shoes ? 'shoes' : 'hat'}.`;
    return outfitDescription;
}

/**
 * The function `feedBaby` takes a baby object as input and prints the baby's name along with their
 * favorite foods in a random order.
 * @param baby - The `baby` parameter in the `feedBaby` function is an object that contains information
 * about the baby, such as their name and favorite foods.
 * @returns The function `feedBaby` returns a string that states the baby's name and the favorite foods
 * they are eating in a random order.
 */
// Function to feed the baby, printing favorite foods in random order
function feedBaby(baby) {
    const shuffledFoods = baby.favoriteFoods.sort(() => Math.random() - 0.5);
    return `${baby.name} is eating ${shuffledFoods.join(', ')}`;
}

// Running both functions on all babies
babies.forEach(baby => {
    console.log(getBabyOutfit(baby)); // Print the outfit description
    console.log(feedBaby(baby));      // Print the shuffled favorite foods
});
