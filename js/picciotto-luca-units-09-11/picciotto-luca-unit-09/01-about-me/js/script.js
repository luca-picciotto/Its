let pageNode  = document.body;
let pageHead = document.head;
// change the font in page
pageNode.style.fontFamily = "Arial, sans-serif";

// Replace each of the span
let nickname = document.getElementById("nickname");
nickname.textContent = "Luca";
let favourite = document.getElementById("favorites");
favourite.textContent = "Pizza";
let hometown = document.getElementById("hometown");
hometown.textContent = "Torino";

// Iterate through each li and change the class to "list-item"
let ul = document.querySelectorAll("ul li");
Array.from(ul).forEach(item => item.className = "list-item");

// Create a new img element and set its src attribute to a picture of you


let newImage = document.createElement("img");
newImage.src = "./img/io.jpg";
newImage.style.width = "100px";
newImage.style.height = "100px";

pageNode.appendChild(newImage);



// The external css file should make items with the .list-item class white, bold and with an 
// orange background
// ○ The external css file should be applied after 4 seconds
let addCss = setTimeout(() => {
    
    let newCss = document.createElement('link');
    newCss.href = './css/style.css';
    newCss.rel = 'stylesheet';
    pageHead.appendChild(newCss);
}, 4000);

log