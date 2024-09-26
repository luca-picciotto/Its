/**
 * The function `topChoice` iterates through an array of favorite colors and logs each color with its
 * corresponding ranking.
 * @param myChoice - ['red', 'black', 'orange', 'blue', 'lime']
 */
const favoriteColors = ['red', 'black', 'orange', 'blue', 'lime'];

function topChoice(myChoice){
    for (let i = 0; i < myChoice.length; i++) {
        console.log("My " + (i+1) + "° choice is " +  myChoice[i]);
    }
}

topChoice(favoriteColors);