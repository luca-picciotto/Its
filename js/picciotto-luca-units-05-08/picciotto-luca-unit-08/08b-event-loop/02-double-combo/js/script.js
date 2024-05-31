const typeOfcards = ["character", "spell", "enemie"];
const typeOfMethods = ["attack", "buff", "damage", "duel"];
    let deck = [];
let card = { 
    type,
    properties: {
        strength,
        defense,
        health,
    },     
    methods
    // createCard: function(deck, i){
    //     deck[i].type = typeOfcards[getRandomNumber(0,2)];
    //     deck[i].properties.strength = getRandomNumber(0,100);
    //     deck[i].properties.defense = getRandomNumber(0,100);
    //     deck[i].properties.health = getRandomNumber(100,1000);
    //     if(deck[i].type === "character"){
    //         deck[i].type = typeOfMethods[0];
    //     }else {
    //         deck[i].methods = typeOfMethods[getRandomNumber(1,3)];
    //     }
    // }

};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDeck(deck){

    for(let i = 0; i < getRandomNumber(10,20); i++){
        card.createCard(deck, i);
    }
    console.log(deck);
}

createDeck(deck);
