const  min = 5;
const max = 10;

let dirtyDishNode = document.getElementById('dirty-stack');
let washDishNode = document.getElementById('wash-stack');
let pageNode = document.body;
let dirtyStack = [];
let washStack = [];

function getDirtyNumber(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getDish(){
    let dish = [];
    let numberOfDirty = getDirtyNumber(min, max);

    for(let i = 0; i < numberOfDirty; i++){
        dish.push("0");
    }
    console.log('get dish funziona');
    console.log(dish);
    return dish;
}

function printDirty(i){
    let dirtyStack = getDish();
    dirtyStack.forEach(element => {
        
        let divDish = document.createElement('div');
        divDish.className = 'dirty-plate';
        divDish.id = 'plate-' + i;
        i++;

        dirtyDishNode.appendChild(divDish);
    });

    return dirtyStack;
}

function removeAndAdd(id, dirtyStack, toWash, washStack,i ){
    let wash; 
    let increment = 0;
    toWash = dirtyStack.pop();
    let element = document.getElementById(id);
    element.remove();
    washStack.push(toWash);
    console.log(washStack);
    wash = setTimeout(() => {
        let divDish = document.createElement('div');
        divDish.className = 'wash-plate';
        divDish.id = 'plates-' + i;
        washDishNode.appendChild(divDish);
    }, increment);
    increment +=1000;
}

let washDish = (dirtyStack, washStack) => {
    let i = 0;
    dirtyStack = printDirty(i);
    
    let toWash;
    
    let startH1 = document.createElement('h1');
    startH1.className = 'h1-start';
    startH1.textContent = "Start! Dish to wash: " + dirtyStack.length;
    document.body.prepend(startH1);
    
    let incrementDirty = 1000;

    let dirty;
    
    for(i = dirtyStack.length-1 ; i >= 0;  i--){
        dirty  = setTimeout(removeAndAdd,incrementDirty, "plate-" + i, dirtyStack, toWash, washStack, i);
        incrementDirty +=1000;
    }
}


washDish(dirtyStack, washStack);



// var test = document.getElementById('start');
// // associa l'evento click alla callback
// test.addEventListener('click', startWash);
