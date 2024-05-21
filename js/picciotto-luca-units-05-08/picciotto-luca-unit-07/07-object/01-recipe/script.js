let recipe = {
    title: 'Spaghetti alla Carbonara',
    serving: 4,
    ingredienti: ['320 g spaghetti', '6 Tuorli', 'Pepe nero', '150 g guanciale', '50 g pecorino romano']
}

console.log('Titolo ricetta: ' + recipe.title);
console.log('Porzioni: ' + recipe.serving);
console.log('Ingredienti: ');

for (let i = 0; i < recipe.ingredienti.length; i++) {
    console.log(recipe.ingredienti[i]);
}

/*---------------------BONUS-------------------------*/
let ricette = [
    {
        title: "Spaghetti all'Amatriciana",
        serving: 8,
        ingredienti: ['320 g spaghetti', '400 g pomodori pelati', '150 g guanciale', '75 g Pecorino romano', '50 g vino bianco', 'Peperoncino fresco']
    },

    {
        title: 'Pizza margherita',
        serving: 6,
        ingredienti: ['500 g farina 0', "30 g olio extravergine d'oliva", '3 g lievito di birra secco', '25 g di sale']
    }
]

console.log('Altre ricette');
for (let j = 0; j < ricette.length; j++) {
    console.log('Titolo ricetta: ' + ricette[j].title);
    console.log('Porzioni: ' + ricette[j].serving);
    console.log('Ingredienti:');
    for (k = 0; k < ricette[j].ingredienti.length; k++) {
        console.log(ricette[j].ingredienti[k]);
    }
}