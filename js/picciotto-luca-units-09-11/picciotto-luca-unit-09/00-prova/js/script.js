// let hobbiesListElement = document.getElementById('hobby-list');
// let firstHobby = document.querySelector('ul li.hobby');
// // all true
// console.log(firstHobby instanceof Node);
// console.log(firstHobby instanceof Element);
// console.log(firstHobby instanceof HTMLElement);
// console.log(hobbiesListElement instanceof Node);
// console.log(hobbiesListElement instanceof Element);
// console.log(hobbiesListElement instanceof HTMLElement);




// // a collection of nodes
// let hobbies = document.getElementsByTagName('li'); // an HTMLCollection
// let alsoHobbies = document.getElementsByClassName('hobby'); // an HTMLCollection
// let allItems = document.querySelectorAll('ul li.hobby'); // a NodeList
// // iterate over the collection
// Array.from(hobbies).forEach(item => console.log(item.textContent));
// Array.from(alsoHobbies).forEach(item => console.log(item.textContent));
// allItems.forEach(item => console.log(item.textContent));


// //select the DOM node
// let catImage = document.getElementById("my-cat");
// let oldImageSource = catImage.src;
// catImage.src = "https://picsum.photos/300/200";

// catImage.className = "portrait";


// // select the pageNode
// let pageNode = document.body;
// // create new DOM nodes
// let headingNode = document.createElement('h1');
// headingNode.textContent = 'Oh, no! Everything is gone!';
// let paragraphNode = document.createElement('p');
// paragraphNode.textContent = 'P.S. Please do write back';
// // replace all existing child nodes of pageNode with the new nodes
// pageNode.replaceChildren(headingNode, paragraphNode)



const url = ['./img/The-Design-of-EveryDay-Things.jpg', './img/The-Most-Human-Human.jpg', './img/The-lord-of-the-ring.jpg'];
let books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    }
];
books.push({
    title: "The lord of the ring",
    author: 'J.K. Tolkien',
    alreadyRead: true
    }
);

console.log(books);

let i = 0;
books.forEach(book => {
    book.url = url[i];
    i += 1;
})

console.log(books);