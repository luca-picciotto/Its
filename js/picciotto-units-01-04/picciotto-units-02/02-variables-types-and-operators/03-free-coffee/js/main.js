// ● Store your current age into a variable.
// ● Store a maximum age into a variable.
// ● Store the amount of coffee you drink per day (as a number).
// ● Calculate how much coffee you would drink for the rest of your life.
// ● Output the result to the screen like so: "You will need NN cups of 
//   coffee to last you until the ripe old age of X".

let age = 20;

let maxAge = 80;

let coffeeForDay = 3;

let numberOfCoffee;
numberOfCoffee = (maxAge * (coffeeForDay * 365)) - (age * (coffeeForDay * 365));

document.getElementById("demo").innerHTML = "You will need " + numberOfCoffee + " cups of coffee to last you until the ripe old age of " + maxAge;