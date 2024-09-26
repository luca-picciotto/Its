
/*
 * Return on screen the conversion of celsius to fahrenheit;
 * @param {number} celsius - celsius temperature
 * @return the conversion in fahrenheit
 */
function celsiusToFahrenheit(celsius){
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    
    document.getElementById("fahrenheit").innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
}

/*
 * Return on screen the conversion of fahrenheit to celsius;
 * @param {number} fahrenheit - fahrenheit temperature
 * @return the conversion in celsius
 */
function fahrenheitToCelsius(fahrenheit){
    let celsius;
    celsius = (fahrenheit - 32) * (5 / 9);

    document.getElementById("celsius").innerHTML = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";

}

celsiusToFahrenheit(23.5);
fahrenheitToCelsius(64.2);

