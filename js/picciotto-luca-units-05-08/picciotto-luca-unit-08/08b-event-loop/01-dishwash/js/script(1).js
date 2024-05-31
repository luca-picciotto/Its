const min = 5;
const max = 10;

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




let washDish = (dirtyStack,washStack) => {
    let printToScreen =" ";
    let printToScreen2 = " ";
    dirtyStack = getDish();
    let toWash;
    document.getElementById("h1-01").innerHTML = "Start! Dish to wash: " + dirtyStack.length;
    displayDirty(printToScreen, dirtyStack);

    for(let i = 0; dirtyStack.length > 0 ;i ++){
        
        toWash = dirtyStack.pop();  //prende il piatto
        document.getElementById("ul-03").innerHTML = "<li> </li>";

        setInterval(unDisplayDirty,1000,max, ind);


        console.log("Dish:" + dirtyStack);  //stack dei piatti
        washStack.push(toWash);
        console.log("Wash Dish:" + washStack);  //stack dei piatti
        
    }

}


function displayDirty(printToScreen, dirtyStack) {
    for(let i = 0; i < dirtyStack.length; i++){
        
        printToScreen += "<li id='li-" + (i+1) + "'></li>";

    }

    document.getElementById("ul-01").innerHTML = printToScreen;
}

function displayWash(printToScreen) {
    for(let i = 0; i < getDirtyNumber(4,10); i++){
        printToScreen += "<li id='li-" + (i+1) + "'></li>";

    }

    document.getElementById("ul-02").innerHTML = printToScreen;
}
    let ind = 0;
function unDisplayDirty(max,i ){

    for(; i < max; i++){    
        
    
        let element  =document.getElementById("li-"+(i+1));
        element.remove();
            setTimeout(unDisplayDirty, 2000,max, i);
    }
}


    


washDish(dirtyStack,washStack);

    // displayWash(printToScreen2);