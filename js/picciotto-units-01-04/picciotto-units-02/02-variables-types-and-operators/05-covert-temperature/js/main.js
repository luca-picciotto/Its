// ● Store a celsius temperature into a variable.
// ● Convert it to fahrenheit and output "NN°C is NN°F".
// ● Now store a fahrenheit temperature into a variable.
// ● Convert it to celsius and output "NN°F is NN°C."

// let celsius = 18.5;
// let fahrenheit;

// document.getElementById("celsius").innerHTML = celsius + "°C is " + (celsius * (9/5) + 32) + "°F";

// fahrenheit = celsius * (9/5) + 32;
// document.getElementById("fahrenheit").innerHTML = fahrenheit + "°F is " + ((fahrenheit - 32) * (5/9)) + "°C";


let celsius = 18.5;
let fahrenheit;

// Convertire Celsius in Fahrenheit
let fahrenheitValue = celsius * (9 / 5) + 32;
document.getElementById("celsius").innerHTML = celsius + "°C is " + fahrenheitValue.toFixed(2) + "°F";

// Convertire Fahrenheit in Celsius
fahrenheit = celsius * (9 / 5) + 32;
let celsiusValue = (fahrenheit - 32) * (5 / 9);
document.getElementById("fahrenheit").innerHTML = fahrenheit.toFixed(2) + "°F is " + celsiusValue.toFixed(2) + "°C";
