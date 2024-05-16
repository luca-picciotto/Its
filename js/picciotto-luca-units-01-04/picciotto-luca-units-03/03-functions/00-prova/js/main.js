// // Function
// function sayName(){
//     console.log("Hi Bob!");
// }

// sayName();

// sayName();

// // Arguments
// function sayName(name){
//     console.log("Hi, " + name);
// }

// sayName("James");
// sayName("Adam");

// // Return Values
// function addNumbers(num1, num2){
//     let result = num1 + num2;

//     return result;
// }

// let sum =  addNumbers(5, 2);
// console.log(sum);


// let biggerSum = addNumbers(2, 5) + addNumbers(3, 2);
// console.log(biggerSum);


// let hugeSum = (addNumbers(5, 2), addNumbers(3, 7));
// console.log(hugeSum);

// // Circular Dependencies
// function chicken(){
//     egg();
// }
// function egg(){
//     chicken();
// }

// egg();

// // Recursion
// function fibonacci(n){
//     if(n < 2){
        
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(30));
// console.log(fibonacci(35));
// console.log(fibonacci(40));

// // Local Scope
// function addNumbers(num1, num2){
//     let localResult = num1 + num2;
//     console.log("The local result il: " + localResult);
// }

// addNumbers(5, 7);
// console.log(localResult);

// // Global Scope 
// let globalResult;

// function addNumbers(num1, num2){
//     globalResult = num1 + num2;
//     console.log("The global result is: " + globalResult);
// }

// addNumbers(5, 7);
// console.log(globalResult);

// // Global Scope - side effect
// function addNumbers(num1, num2){
//     localResult = num1 + num2;
//     console.log("The local result il: " + localResult);
// }

// addNumbers(5, 7);
// console.log(localResult);


// // Let 
// function worker(){
//     let x = 88;
//     for(let i = 0; i < 4; i++){
//         console.log("i block = ", i);
//     }
//     console.log("x  func = ", x);
//     console.log("i !block = ", i);
// }

// worker();
// console.log("x !func = ", x);


// // Var 
// function worker(){
//     var  x = 88;
//     for(var i = 0; i < 4; i++){
//         console.log("i block = ", i);
//     }
//     console.log("x func = ", x);
//     console.log("i !block = ", i);
// }

// worker();
// console.log("x !func = ", x);


// // Another way to look at functions
// let add = function(a, b){
//     return a + b;
// };

// let mad = add;

// let resultA = add(5, 4);
// console.log(resultA);

// let resultB = mad(21, 7);
// console.log(resultB);

// console.log(typeof add);

// // Another way to look at functions
// function add(a, b) {
//     return a + b;
//     }
//     let mult = function(a, b) {
//     return a * b;
//     };
//     let calculate = function(fn, a, b) {
//     console.log('This is your result:', fn(a, b));
//     };
//     calculate(add, 2, 4);
//     calculate(mult, 2, 4);
    

let add = (x, y) => { return x + y; };
console.log(typeof add); // function
console.log(add instanceof Function); // true