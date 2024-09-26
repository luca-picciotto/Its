// Metodo costruttore
console.log('---------------------');
let Canine = function (latinName){
    this.genus = 'canis';
    this.latinName = latinName;
};
// è una funzione normale, si chiama COSTRUTTORE perchè viene invocata con 'new'

let doggy = new Canine('Canis familiaris');
console.log(doggy);
console.log('---------------------');



// Creare un Object senza costruttore
console.log('---------------------');
let person = {
    heart: 'black'
};

let adam = Object.create(person);
let sam = Object.create(person);

console.log(adam.heart);
console.log(sam.heart);
adam.heart = 'big';
console.log(adam.heart);
console.log(sam.heart);
// ---------------------


// Prendere e aggiungere un Prototype
console.log('---------------------');

let dog = {
    happy: true
};

let buck = Object.create(dog);
console.log(buck.happy);

console.log(Object.getPrototypeOf(buck) === dog);
Object.setPrototypeOf(buck, {});
// ---------------------


// Creare un oggetto
console.log('---------------------');
function Book(title,author,numPages){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.currentPages = 0;
}

Book.prototype.read = function () {
    this.currentPages = this.numPages;
    console.log('You read ' + this.numPages + ' pages of ' + this.title + '! ');
    
};

let book = new Book('Robot Dream', 'Isaac Asimov', 320);
book.read();
// ---------------------


// Come usare un costruttore in modo pulito e chiaro
// console.log('---------------------');
// function Book(config) {
//     this.title = config.title || 'Untitled';
//     this.author = config.author || 'Unknown';
//     this.numPages = config.numPages || 100;
//     this.currentPage = 0;
//    }
//    let book = new Book({
//     title: 'Robot Dreams',
//     numPages: 320
//    });
// ---------------------


// Estendere un oggetto
console.log('---------------------');
function PaperBack(title, author, numPages, cover) {
    Book.call(this, title, author, numPages);           // .call dice che PaperBack è un Book
    
    this.cover = cover;
}
PaperBack.prototype = Object.create(Book.prototype);    //assegna a PaperBack il prototype di Book
PaperBack.prototype.burn = function (){                 //aggiunge un metodo 'burn' al prototype di PaperBack
    console.log('Omg, you burnt all ' + this.numPages + ' pages');
    this.numPages = 0;    
}

let paperback = new PaperBack('1984', 'George Orwell', 250, 'cover.jpg');
paperback.read();
paperback.burn();
// ---------------------


// Estendere un oggetto pt.2
console.log('---------------------');
function E_Book(title, author, numPages, fileSize){
    Book.call(this, title, author,numPages);
    this.fileSize = fileSize;
}

E_Book.prototype = Object.create(Book.prototype);

E_Book.prototype.download = function (){
    console.log('The ' + this.title + ' start download! Remaining: ' + this.fileSize + 'Mb');
}
let ebook = new E_Book('Momo', 'Michael End', 235, 1024) ;
ebook.read();
ebook.download();
// ---------------------




// Operator instanceof
// console.log('---------------------');

// book is a book, also paperback is a Book
console.log('book instanceof Book');
console.log(book instanceof Book); // true

console.log('paperback instanceof Book'); // true
console.log(paperback instanceof Book); // true

// but book is not a PaperBack
console.log('paperback instanceof PaperBack'); // true
console.log(paperback instanceof PaperBack); // true

console.log('book instanceof PaperBack'); // false
console.log(book instanceof PaperBack); // false

// both are instances of Object because of prototype inheritance
console.log('book instanceof Object'); // true
console.log(book instanceof Object); // true

console.log('paperback instanceof Object'); // true
console.log(paperback instanceof Object); // true
// ---------------------
