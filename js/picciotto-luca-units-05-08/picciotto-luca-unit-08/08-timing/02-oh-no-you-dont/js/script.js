function usefulFunction(number){
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

    /*
    * Return on console the half of argoment passed, do squere of half, calculate the area and do the percent;
    * @param {number} a - the first number
    */
    function calculator(a){
        let half;
        half = halfNumber(a);
        console.log(half);


        let square;
        square = squareNumber(half);
        console.log(square);

        let area;
        area = areaOfCircle(square);
        console.log(area);


        let percent;
        percent = percentOf(area, square);
        console.log(percent);

    }

    calculator(number);
}



 let play = setTimeout(() => {
    usefulFunction(3)
}, 10000);



let stop = setTimeout(() => {
    clearTimeout(play);
    console.log("Function cancelled!");
}, 5000);