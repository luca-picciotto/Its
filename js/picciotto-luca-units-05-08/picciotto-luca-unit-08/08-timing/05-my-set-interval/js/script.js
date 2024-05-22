function mySetInterval(fn, timer, param1, param2){
    while(1){
        setTimeout(fn, timer, param1, param2);
    }
}



let add = (a, b) => {
    let result;

    result = a + b;
    
    mySetInterval(add, 1000, a, b);
    console.log(result);
}

add(3, 3)


