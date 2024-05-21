let cart = {
    pen: '2.50',
    book: '15.99',
    pencil: '1.00',
    jeans: '29.90',
    shoes: '55.00'
}


function cashRegister (cart) {
    let total = 0;

    let keys = Object.keys(cart);

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            total += parseFloat(cart[key]);
        }

    return total;
}

console.log('Total: ' + cashRegister(cart));