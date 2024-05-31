function printToScreen(toPrint,id){
    document.getElementById(id).innerHTML = toPrint;
}
function removeToScreen(id){
    let element = document.getElementById(id);
    element.remove();
}


//---------------------------
//      Stampa washStack
//---------------------------
function printWash(id){
    let result = " " ;
    let increment = 0;
    let finish ;

    for(let i = 0; i < 5; i++){
        result +=  "<div class='plate' id='plateW-"+ i +"'>"+"</div> <br> ";
        finish = setTimeout(printToScreen,1000 + increment,result, id);
        increment += 1000;
    }
}

//---------------------------
//      Stampa dirtyStack
//---------------------------
function printDirty(id){
    let result = " " ;

    for(let i = 0; i < 5; i++){
        result +=  "<div class='plate' id='plateD-"+ i +"'>"+"</div> <br> ";
    }
    printToScreen(result, id);
}

function removeDirty(){
    let increment = 0;
    let start;

    for(let i = 4; i >= 0; i--){
        start = setTimeout(removeToScreen,1000 + increment, "plateD-"+i)
        increment +=1000;
    }
}


function washDish(){
        printDirty("dirtyStack");
    removeDirty();
    printWash("washStack");
}



printDirty("dirtyStack");
// ottiene l'elemento 'test'
var test = document.getElementById('start');
// associa l'evento click alla callback
test.addEventListener('click', washDish);

