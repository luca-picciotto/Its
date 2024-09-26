g('book instanceof Book');
console.log(book instanceof Book); // true

console.log('paperback instanceof Book'); // true
console.log(paperback instanceof Book); // true

// // but book is not a PaperBack
console.log('paperback instanceof PaperBack'); // true
console.log(paperback instanceof PaperBack); // true

console.log('book instanceof PaperBack'); // false
console.log(book instanceof PaperBack); // false

// // both are instances of Object because of prototype inheritance
console.log('book instanceof Object'); // true
console.log(book instanceof Object); // true

console.log('paperback instanceof Object'); // true
console.log(paperback instanceof Object); // true