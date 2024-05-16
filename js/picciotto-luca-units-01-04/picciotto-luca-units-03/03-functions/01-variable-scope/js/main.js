// ● Recreate the local and global scope examples in your browser
// ● Try to call the function “addNumbers” a few more times
// ● Write a new .js file that uses both local and global variables in the same
// project
// ● Make sure that you understand exactly what’s happening at every stage


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


let popolazioneMondiale = 8e9;
console.log(popolazioneMondiale);

/*
 * Return on console the fortune of person passed like argmuents
 * @param {number} dopo - people to add
 * @returns {string} popolazioneMondiale - total of people in the world
 */
function addPeople(dopo){
    let popolazioneItalia = dopo;
    popolazioneMondiale  += popolazioneItalia;
    console.log(popolazioneMondiale);
}
addPeople(1e9);
console.log(popolazioneMondiale);
console.log(popolazioneItalia);