// 4.Coffee supply calculator
// ● Write a function named calculateSupply that:
//      ○ takes 2 arguments: age, amount per day.
//      ○ calculates the amount consumed for rest of the life 
    //    (based on a constant max age).
// ● outputs the result to the screen like so: "You will need NN 
//   cups of coffee to last you until the age of X"
// ● Call that function three times, passing in different values 
//   each time
// ● Bonus:
//      ○ Calculate in liters, accepting floating point values for 
//        amount per day (0.3 liters of coffee)
//      ○ Round the result to a round number

const maxAge = 80;
const dayForYear = 365;
let id = 0;

/*
 * Return the auto-increment of p's id;
 * @returns {number} id - id ++;
 */
function addId(){
    id ++;
    return id;
}

/*
 * Return the amount of caffee take in life;
 * @param {number} age - starting age
 * @param {number} amoutPerDay - day's coffee
 * @returns {number} result - total of coffee between starting age and maximous age;
 */
function calculateSupply(age, amountPerDay){
    let result;
    result =((maxAge * amountPerDay)*dayForYear) - ((age * amountPerDay) * dayForYear)
    document.getElementById(addId()).innerHTML = "You will need " + result + "cups of coffee to last you until the age of " + maxAge + "if you start to " + age + "years";
}

calculateSupply(20, 3);
calculateSupply(10, 3);
calculateSupply(20, 4);
calculateSupply(20, 1);