// Write a function that will take one argument (a number) and 
// perform the following operations, using the functions you 
// wrote earlier:
// ● Take half of the number and store the result
// ● Square the result of #1 and store that result
// ● Calculate the area of a circle with the result of #2 as 
// the radius
// ● Calculate what percentage that area is of the squared result (#3)



/*
 * Return on console the squered of argoment passed;
 * @param {number} a - the first number
 * @returns {number} result - squere of a;
 */
function squareNumber(a){
    let result;
    result = a * a;

    console.log("The result of squaring the number " + a + " is " + result);
    return result;
}

/*
 * Return on console the half of argoment passed;
 * @param {number} a - the first number
 * @returns {number} result - half of a;
 */
function halfNumber(a){
    let result;
    result = a / 2;

    console.log("Half of " + a + " is " + result);
    return result;
}

/*
 * Return on console the percent of argoment passed;
 * @param {number} a - the first number
 * @returns {number} result - percent of a;
 */
function percentOf(percent, a){
    let result;
    result = (a * percent) / 100;

    console.log(result + " is " + percent + "% of " + a);
    return result;
}

/*
 * Return on console the area of circle with the radius passed like argument;
 * @param {number} a - the first number
 * @returns {number} result - area of circle with a;
 */
function areaOfCircle(radius){
    let result;
    const pi = 3.14;
    result = pi * (radius * radius);

    console.log("The area for a circle with radius " + radius + " is " + result);
    return result;
}

/**
 * Performs a series of calculations on the given number:
 * - Takes half of the number
 * - Squares the result of the halved number
 * - Calculates the area of a circle with the squared result as the radius
 * - Calculates the percentage that area is of the squared result
 * @param {number} a - The number to be used in the calculations.
 */

function calculator(a){
    let half = setTimeout(() =>{
        halfNumber(a);
    },1000) ;

    let square = setTimeout(() => {
        squareNumber(half);  
    }, 2000);

    let area = setTimeout(() => {
        areaOfCircle(square);
    },3000);

    let percent = setTimeout(() => {
        percentOf(area, square);
    }, 4000);
}


calculator(3);
