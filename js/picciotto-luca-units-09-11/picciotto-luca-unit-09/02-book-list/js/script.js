/**
 * Seleziona il nodo principale del body della pagina.
 * @type {HTMLElement}
 */
let pageNode = document.body;

/**
 * Seleziona il nodo principale del head della pagina.
 * @type {HTMLElement}
 */
let pageHead = document.head;

/**
 * Array contenente gli URL delle immagini dei libri.
 * @type {string[]}
 */
const url = [
    './img/The-Design-of-EveryDay-Things.jpg', 
    './img/The-Most-Human-Human.jpg', 
    './img/The-lord-of-the-ring.jpg'
];

/**
 * Array di oggetti rappresentanti i libri.
 * @type {Object[]}
 * @property {string} title - Il titolo del libro.
 * @property {string} author - L'autore del libro.
 * @property {boolean} alreadyRead - Indica se il libro è già stato letto.
 */
let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    }, 
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

/**
 * Aggiunge un nuovo libro all'array dei libri.
 */
books.push({
    title: "The lord of the ring",
    author: 'J.K. Tolkien',
    alreadyRead: true
});

/**
 * Crea un elemento h1 per il titolo della lista dei libri e lo aggiunge al body della pagina.
 */
let hTitle = document.createElement('h1');
hTitle.textContent = "My Book List";
pageNode.appendChild(hTitle);

/**
 * Aggiunge un foglio di stile esterno al head della pagina dopo 5 secondi.
 * @type {number}
 */
let addCss = setTimeout(() => {
    let linkStyle = document.createElement('link');
    linkStyle.href = './css/style-01.css';
    linkStyle.rel = 'stylesheet';
    pageHead.appendChild(linkStyle);
}, 5000);

/**
 * Variabile per iterare attraverso gli URL delle immagini.
 * @type {number}
 */
let i = 0;
    
/**
 * Itera attraverso l'array dei libri e crea gli elementi HTML corrispondenti per ogni libro.
 * @param {Object} element - Oggetto libro corrente.
 * @param {string} element.title - Il titolo del libro.
 * @param {string} element.author - L'autore del libro.
 * @param {boolean} element.alreadyRead - Indica se il libro è già stato letto.
 */
books.forEach(element => {
    element.url = url[i];
    i += 1;

    // Crea un div per il libro
    let divBook = document.createElement('div');
    divBook.className = 'div-book';

    // Crea un div per il titolo del libro
    let bookTitle = document.createElement('div');
    bookTitle.className = 'div-item';
    bookTitle.textContent = element.title;

    // Crea un div per l'immagine del libro
    let bookImage = document.createElement('div');
    bookImage.className ='div-img';
    let image = document.createElement('img');
    image.src = element.url;
    bookImage.appendChild(image);

    // Crea un div per l'autore del libro
    let bookAuthor = document.createElement('div');
    bookAuthor.className = 'div-item';
    bookAuthor.textContent = element.author;

    // Crea un div per lo stato di lettura del libro
    let bookRead = document.createElement('div');
    bookRead.className = 'div-item';
    bookRead.textContent = element.alreadyRead;

    // Aggiunge tutti i div del libro al div principale del libro
    divBook.append(bookTitle, bookImage,bookAuthor,bookRead);
    pageNode.appendChild(divBook);

    // Aggiunge una classe specifica al titolo del libro in base allo stato di lettura
    if(element.alreadyRead){
        bookTitle.classList.add('already-read');
    } else {
        bookTitle.classList.add('not-already-read');
    }
});