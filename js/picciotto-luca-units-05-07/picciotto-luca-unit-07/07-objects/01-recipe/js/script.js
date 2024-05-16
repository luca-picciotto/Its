// Create an object to hold information on your favorite recipe. It should have 
// properties for title (a string), servings (a number), and ingredients (an 
// array of strings).
// ● On separate lines (one console.log statement for each), log the recipe 
// information
// Bonus: Create an array that holds several recipes and log them all


let favoriteRecipe =[ 
    {
        title: 'pizza',
        servings: 1,
        ingredients: {'flour': 500, 'yeast': '1 cup', 'water': 200, 'sugar': '1 cup', 'salt': '1 cup'}
    },
    {
        title:'burger',
        servings: 3,
        ingredients: {'flour': 200, 'yeast': '1 cup', 'water': 100, salt: '1 cup'}
    }
];

document.getElementById('title').innerHTML = favoriteRecipe[0].title;
document.getElementById('serving').innerHTML = favoriteRecipe[0].servings;
document.getElementById('ingredient-name').innerHTML = Object.keys(favoriteRecipe[0].ingredients).join("<br>");
document.getElementById('ingredient-quantity').innerHTML = favoriteRecipe[0].ingredients.flour + "<br>" + favoriteRecipe[0].ingredients.yeast + "<br>" + favoriteRecipe[0].ingredients.water + "<br>" + favoriteRecipe[0].ingredients.sugar + "<br>" + favoriteRecipe[0].ingredients.salt;



for (let i = 0; i < favoriteRecipe.length; i ++){
    let favoriteRecipes  = favoriteRecipe[i];

    console.log(favoriteRecipes);
}