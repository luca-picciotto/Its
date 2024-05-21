/**
 * List of books with their titles, authors, and read status.
 * @type {Array<Object>}
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {boolean} alreadyRead - Indicates if the book has been read.
 */
let books = [
    {
        title: 'Lo Hobbit',
        author: 'J.R.R. Tolkien',
        alreadyRead: true
    },
    {
        title: 'The Lord of Ring',
        author: 'J.R.R. Tolkien',
        alreadyRead: false 
    },
    {
        title: 'Momo',
        author: 'Michael Ende',
        alreadyRead: true
    },
    {
        title: 'Pride & Prejudice',
        author: 'Jane Austen',
        alreadyRead: false
    }
];

/**
 * Logs the title and author of each book in the list.
 * @param {Array<Object>} book - The array of book objects.
 */
function infoBooks(book){
    for (let i = 0; i < book.length; i++){
        console.log(book[i].title + ' by ' + book[i].author);
    }
}

/**
 * Logs the read status of each book in the list.
 * @param {Array<Object>} book - The array of book objects.
 */
function readThisBook(book){
    for (let i = 0; i < book.length; i++){

        if(book[i].alreadyRead === true){
            console.log('You already read "' + book[i].title + '" by ' + book[i].author );
        }else {
            console.log('You still need to read "' + book[i].title + '" by ' + book[i].author );
        }

    }
}

/**
 * Logs a separator line.
 */
function separateOutput(){
    console.log("----------------------------------------------");
}

// Function calls
infoBooks(books);
separateOutput();
readThisBook(books);
