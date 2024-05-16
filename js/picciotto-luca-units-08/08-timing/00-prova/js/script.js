// // Timing
// // ● setTimeout allows to run a function once after an interval of time.
// // ● setInterval allows to run a function regularly with a specified interval.



// // setTimeout
// // Syntax
// // setTimeout(function, milliseconds, param1, param2, ...)

// // function
// // Required. The function that will be executed

// // milliseconds
// // Optional. The number of milliseconds to wait before executing the code. If omitted, the value 0 is
// // used

// // param1, param2, ...
// // Optional. Additional parameters to pass to the function. Not supported in very old browsers

// // Named function
// function sayHi() {
//     console.log('Hello');
// }
// setTimeout(sayHi, 1000);
   
// // Anonymous function
// setTimeout(function () {
//     console.log('Hello');
// }, 3000);

// // Anonymous arrow function
// setTimeout(() => {
//     console.log('Hello');
// }, 3000);
   
// // With arguments
// function sayHi(phrase, who) {
//     console.log(phrase + ', ' + who);
// }
// setTimeout(sayHi, 1000, 'Hello', 'John');

// // Anonymous with arguments
// setTimeout(
//     function (value) {
//         console.log(value);
//     }, 1000, 'hello'
// );

// // Works in IE9
// setTimeout(function () {
//     sayHi('Hello', 'John');
// }, 1000);


let sayHi = (name) => {
    console.log("Hi " + name);
}

sayHi("John");
setTimeout(sayHi, 5000, "miky");
sayHi("tud");


