const min = 1;
const max = 5;

let dirtyStack = [];
let washStack = [];

function getDirtyNumber(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getDish(){
    let dish = [];
    let numberOfDirty = getDirtyNumber(min,max);
    for(let i = 0; i < numberOfDirty; i ++ ){
        dish.push("0");
    }
    return dish;
}



let washDish = (dirtyStack, washStack) => {
    //riempie lo stack con i piatti sporchi
    dirtyStack = getDish();
    let toWash;

    //parte il lavaggio
    console.log("Start! Dish to wash: " + dirtyStack.length);
    for(let i = 0; dirtyStack.length > 0 ;i ++){
        
        toWash = dirtyStack.pop();  //prende il piatto
        console.log("I'm washing: " + toWash);   //lava il piatto
        console.log("Dish:" + dirtyStack);  //stack dei piatti
        washStack.push(toWash);
        console.log("Wash Dish:" + washStack);  //stack dei piatti
        
    }
    console.log("Finish!");
    console.log("Dirty Dish:" + dirtyStack.length);  //stack dei piatti sporchi

    console.log("Wash Dish:" + washStack.length);  //stack dei piatti puliti

    return dirtyStack;  
};

washDish(dirtyStack, washStack);

