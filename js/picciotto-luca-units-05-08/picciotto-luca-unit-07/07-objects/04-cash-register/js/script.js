/**
 * Represents the price of various items.
 * @typedef {Object} ItemsPrice
 * @property {number} banana - The price of a banana.
 * @property {number} tshirt - The price of a t-shirt.
 * @property {number} book - The price of a book.
 * @property {number} pencil - The price of a pencil.
 * @property {number} shoes - The price of a pair of shoes.
 * @property {number} apple - The price of an apple.
 * @property {number} proteinShake - The price of a protein shake.
 * @property {number} pen - The price of a pen.
 * @property {number} jeans - The price of a pair of jeans.
 */


let itemsPrice = { 
    banana: 1.5,
    tshirt: 25.1,
    book: 15.9,
    pencil: 1,
    shoes: 55,
    apple: 0.60,
    proteinShake: 22.36,
    pen: 2.50,
    jeans: 29.9
};

/**
 * Represents a shopping cart with items and their quantities.
 * @typedef {Object} Cart
 * @property {number} banana - The price of a banana.
 * @property {number} pencil - The total price of pencils (multiplied by quantity).
 * @property {number} shoes - The price of a pair of shoes.
 * @property {number} apple - The total price of apples (multiplied by quantity).
 */


let cart = {
    banana: itemsPrice.banana,
    pencil: itemsPrice.pencil * 5,
    shoes: itemsPrice.shoes,
    apple: (itemsPrice.apple * 2)
}

/**
 * Calculates the total price of items in the cart.
 * @param {Cart} cart - The shopping cart containing items and their prices.
 * @returns {number} The total price of all items in the cart.
 */
function cashRegister(cart){
    let total = 0;

    let keys = Object.keys(cart);

    for(let i = 0; i < keys.length; i++){
        total += cart[keys[i]];
    }
    
    return total;
}

console.log("The total amount: " + cashRegister(cart));
