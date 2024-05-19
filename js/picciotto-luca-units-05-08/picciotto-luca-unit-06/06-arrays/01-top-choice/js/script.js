const favoriteColors = ['red', 'black', 'orange', 'blue', 'lime'];

function topChoice(myChoice){
    for (let i = 0; i < myChoice.length; i++) {
        console.log("My " + (i+1) + "° choice is " +  myChoice[i]);
    }
}

topChoice(favoriteColors);