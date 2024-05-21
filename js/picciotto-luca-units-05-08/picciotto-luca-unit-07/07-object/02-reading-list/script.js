let books = [
    {   title: 'The Dome',
        author: 'Stephen King',
        alreadyRead: true   
    },
    {
        title: 'La psichiatra',
        author: 'Wulf Dorn',
        alreadyRead: true
    },
    {
        title: 'Il grande Gatsby',
        author: 'Scott Fitzgerald',
        alreadyRead: false
    },
    {
        title: 'La signora Dalloway',
        author: 'Virginia Woold',
        alreadyRead: false
    }
]

for (let i = 0; i < books.length; i++) {
    let book = books[i]
    console.log(book.title + ' by ' + book.author);

    if (book.alreadyRead === true) {
        console.log('You already read "' + book.title + '" by ' + book.author);
    } else {
        console.log('You still need to read "'+ book.title + '" by ' + book.author);
    }
}