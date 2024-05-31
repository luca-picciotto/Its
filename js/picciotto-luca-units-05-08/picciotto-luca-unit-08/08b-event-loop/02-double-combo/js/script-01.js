const typeOfcards = ["character", "spell", "enemie"];
const typeOfMethods = ["attack", "buff", "damage", "duel"];
    let deck = [];


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Card(type, strength, defense, health, method) {
    this.type = type;
    this.properties = {
        strength: strength,
        defense: defense,
        health: health
    }
    this.method = method;
}


Card(typeOfcards[getRandomNumber(0,2)], getRandomNumber(0,100), getRandomNumber(0,100), getRandomNumber(100,1000), typeOfMethods[getRandomNumber(0,)]);

function createDeck(deck){
    for(let i = 0; i < getRandomNumber(10,20); i++){
        let card = new Card(typeOfcards[getRandomNumber(0,2)], getRandomNumber(0,100), getRandomNumber(0,100), getRandomNumber(100,1000), typeOfMethods[getRandomNumber(0,)]);
        deck[i].push() = card;
    }

    console.log(deck);
}

createDeck(deck);