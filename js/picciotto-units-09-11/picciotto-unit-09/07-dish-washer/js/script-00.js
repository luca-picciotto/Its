/**
 * @constant {number} min - Il numero minimo di piatti sporchi generati.
 */
const min = 5;

/**
 * @constant {number} max - Il numero massimo di piatti sporchi generati.
 */
const max = 10;

/**
 * @type {HTMLElement} - Nodo del DOM che rappresenta lo stack dei piatti sporchi.
 */
let dirtyDishNode = document.getElementById('dirty-stack');

/**
 * @type {HTMLElement} - Nodo del DOM che rappresenta lo stack dei piatti lavati.
 */
let washDishNode = document.getElementById('wash-stack');

/**
 * @type {HTMLElement} - Nodo del body della pagina.
 */
let pageNode = document.body;

/**
 * @type {Array} - Array che rappresenta lo stack dei piatti sporchi.
 */
let dirtyStack = [];

/**
 * @type {Array} - Array che rappresenta lo stack dei piatti lavati.
 */
let washStack = [];

/**
 * Genera un numero casuale tra min e max.
 * @param {number} min - Il numero minimo.
 * @param {number} max - Il numero massimo.
 * @returns {number} - Un numero casuale tra min e max.
 */
function getDirtyNumber(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/**
 * Genera un array di piatti sporchi.
 * @returns {Array} - Un array contenente piatti sporchi.
 */
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

/**
 * Stampa i piatti sporchi nel DOM.
 * @param {number} i - Indice iniziale per l'ID dei piatti.
 * @returns {Array} - Lo stack dei piatti sporchi.
 */
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

/**
 * Rimuove un piatto dallo stack dei piatti sporchi e lo aggiunge allo stack dei piatti lavati.
 * @param {string} id - L'ID del piatto da rimuovere.
 * @param {Array} dirtyStack - Lo stack dei piatti sporchi.
 * @param {*} toWash - Piatto da lavare.
 * @param {Array} washStack - Lo stack dei piatti lavati.
 * @param {number} i - Indice per l'ID dei piatti lavati.
 */
function removeAndAdd(id, dirtyStack, toWash, washStack, i){
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
    increment += 1000;
}

/**
 * Lava i piatti dallo stack dei piatti sporchi e li aggiunge allo stack dei piatti lavati.
 * @param {Array} dirtyStack - Lo stack dei piatti sporchi.
 * @param {Array} washStack - Lo stack dei piatti lavati.
 */
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
    for(i = dirtyStack.length - 1; i >= 0; i--){
        dirty = setTimeout(removeAndAdd, incrementDirty, "plate-" + i, dirtyStack, toWash, washStack, i);
        incrementDirty += 1000;
    }
}

// Inizia il processo di lavaggio dei piatti
washDish(dirtyStack, washStack);

// Associa l'evento click alla callback startWash
// var test = document.getElementById('start');
// test.addEventListener('click', startWash);

