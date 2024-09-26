
/* This JavaScript code snippet is creating a new array called `resultArray` by modifying each string
element in the `noisesArray` array. */
let noisesArray = ['quack', 'sneeze', 'boom'];
let resultArray = [];

/* The code snippet `noisesArray.forEach(noise => { ... })` is iterating over each element in the
`noisesArray` array. For each element (represented by `noise`), it is then looping through each
character of the string noise using the inner `for` loop. */
noisesArray.forEach(noise => {
    /* The `for` loop in the code snippet is iterating over each character of the string `noise`. For
    each character at index `i`, it is creating a modified version of the string by capitalizing the
    character at index `i`, and then appending a number of exclamation marks equal to `i + 1` to the
    end of the modified string. Finally, the modified string is added to the `resultArray`. This
    process is repeated for each character in the `noise` string, resulting in a new array
    `resultArray` containing modified versions of each string element in the `noisesArray`. */
    for (let i = 0; i < noise.length; i++) {
        let modifiedNoise = noise.slice(0, i) + noise[i].toUpperCase() + noise.slice(i + 1);
        modifiedNoise += '!'.repeat(i + 1);
        resultArray.push(modifiedNoise);
    }
});

console.log(resultArray);
