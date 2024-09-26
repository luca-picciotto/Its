
/**
 * An array that holds a list of 30 items (food, books, etc.).
 * @type {Array<string>}
 */
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


/**
 * Prints each item in the given array at one-second intervals using setInterval.
 * @param {Array<string>} items - An array of items to be printed.
 */
function slowListInterval(items) {
    let i = 0;

    let intervalId = setInterval(() => {
        console.log("setInterval: " + items[i]);
        i++;

        if (i === items.length) {
            clearInterval(intervalId);
        }
    }, 1000);
}

/**
 * Prints each item in the given array at 1.5-second intervals using setTimeout.
 * @param {number} i - The current index of the item to be printed.
 * @param {Array<string>} items - An array of items to be printed.
 */
function slowListTimeout(i, items) {
    if (i < items.length) {
        console.log("setTimeout: " + items[i]);
        setTimeout(() => slowListTimeout(i + 1, items), 1000);
    }
}


// Function calls
slowListInterval(items);
slowListTimeout(0, items);
