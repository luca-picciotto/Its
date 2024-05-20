// Create an array that holds a list of 30 items (food, books, etc.)
// ● Print one item of the list every second until the list is completely printed
// ○ Use setInterval to achieve this goal
// ○ Do the same thing using setTimeout



// Create an array that holds a list of 30 items (food, books, etc.)
// ● Print one item of the list every second until the list is completely printed
// ○ Use setInterval to achieve this goal
// ○ Do the same thing using setTimeout



const items = [
    "Apples",
    "Bananas",
    "Chicken Breast",
    "Salmon",
    "Broccoli",
    "Carrots",
    "Potatoes",
    "Spinach",
    "Milk",
    "Cheddar Cheese",
    "Bread",
    "Rice",
    "Pasta",
    "Eggs",
    "Orange Juice",
    "The Great Gatsby by F. Scott Fitzgerald",
    "To Kill a Mockingbird by Harper Lee",
    "1984 by George Orwell",
    "Moby Dick by Herman Melville",
    "Pride and Prejudice by Jane Austen",
    "The Catcher in the Rye by J.D. Salinger",
    "The Hobbit by J.R.R. Tolkien",
    "War and Peace by Leo Tolstoy",
    "The Odyssey by Homer",
    "The Picture of Dorian Gray by Oscar Wilde",
    "Laptop",
    "Smartphone",
    "Headphones",
    "Notebook",
    "Pen"
];

    let i = 0;
function  slowList(list){


    console.log(list[i]);
    i ++;
}

setInterval(slowList,3000, items);
clearInterval
