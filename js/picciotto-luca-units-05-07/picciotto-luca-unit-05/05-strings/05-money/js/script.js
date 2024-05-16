function money(amount){
    
    if(amount == 1){
        let dollarAmount = amount + ' dollar';
    } else {
        let dollarAmount = amount + ' dollars';
    }

    return dollarAmount;
}

console.log(money(1));
console.log(money(100));
console.log(money(0));