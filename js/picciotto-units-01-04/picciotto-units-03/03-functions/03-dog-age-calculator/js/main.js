// Calculate a puppy’s age in dog years
// ● Write a function named calculateDogAge that:
//      ○ takes 1 argument: the dog's age in human years
//      ○ calculates the dog's age based on the conversion rate of 
    //    1 human year to 7 dog years
//      ○ outputs the result to the screen like so: "Your dog 
    //    is NN years old in dog years!"
// ● Call the function three times with different sets of values
// ● Bonus:
//      ○ Add another argument to the function that takes the 
    //    conversion rate of human to dog years
let id = 0;

/*
 * Return the auto-increment of p's id;
 * @returns {number} id - id ++;
 */
function addId(){
    id++;
    return id;
}

/*
 * Return on screen age of dog converted to human age
 * @param {number} ageInHuman - age in human years
 * @param {number} rateConverison - rate of conversion (7)
 * @returns {number} dogAge - age of dog converted;
 */
function calculateDogAge(ageInHuman, rateConversion){
    let dogAge;
    dogAge = ageInHuman * rateConversion;

    document.getElementById(addId()).innerHTML = "Your dog is " + dogAge + "years old in dog years";
}


calculateDogAge(7 ,7);
calculateDogAge(5, 7);
calculateDogAge(2, 7);
// calculateDogAge(1, 7);

