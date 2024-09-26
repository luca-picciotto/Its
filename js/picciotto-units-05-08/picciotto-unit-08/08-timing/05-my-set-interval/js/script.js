/**
 * Adds two numbers and logs the result.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {void}
 */
let add = (a, b) => {
    let result = a + b;
    console.log(result);
}

/**
 * Repeatedly calls a function with a specified interval using setTimeout, simulating setInterval.
 * @param {Function} fn - The function to be called repeatedly.
 * @param {number} timer - The interval time in milliseconds between each call.
 * @param {*} param1 - The first parameter to pass to the function.
 * @param {*} param2 - The second parameter to pass to the function.
 * @returns {void}
 */
function mySetIntervalLoop(fn, timer, param1, param2) {
    let addTimer = 0;
    function loop() {
        setTimeout(fn, (timer + addTimer), param1, param2);
        setTimeout(loop, timer);
    }
    addTimer += timer;
    loop();
}

/**
 * Calls a function a specified number of times with a specified interval using setTimeout.
 * @param {Function} fn - The function to be called repeatedly.
 * @param {number} timer - The interval time in milliseconds between each call.
 * @param {*} param1 - The first parameter to pass to the function.
 * @param {*} param2 - The second parameter to pass to the function.
 * @returns {void}
 */
function mySetInterval(fn, timer, param1, param2) {
    let addTimer = 0;
    for (let i = 0; i < 15; i++) {
        setTimeout(fn, (timer + addTimer), param1, param2);
        addTimer += timer;
    }
}

// Function call
mySetInterval(add, 1000, 3, 3);