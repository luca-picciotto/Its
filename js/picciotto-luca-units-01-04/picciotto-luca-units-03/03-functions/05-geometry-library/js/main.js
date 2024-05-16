// ● Create a function called calcCircumfrence:
//     ○ Pass the radius to the function
//     ○ Calculate the circumference based on the radius, and output 
//       "The circumference is NN"
// ● Create a function called calcArea:
//     ○ Pass the radius to the function.
//     ○ Calculate the area based on the radius, and output 
//       "The area is NN"
const pi = 3.14;



/*
 * Return the circonference of circle with the radius passed like argument;
 * @param {number} radius - the first number
 * @returns {number} result - circonference of circle;
 */
function calcCircumfrence(radius){
    let circumference;
    circumference = 2 * radius * pi;

    return circumference;
}

/*
 * Return the area of circle with the radius passed like argument;
 * @param {number} radius - the first number
 * @returns {number} result - area of circle with a;
 */
function calcArea(radius){
    let area;
    area = pi * (radius * radius);

    return area;
}

document.getElementById("circonferenza").innerHTML = "The circumference is " + calcCircumfrence(13);
document.getElementById("area").innerHTML = "The area is " + calcArea(2);
