

/**
 * Represents information about a movie, including its title, duration, and main stars.
 * @typedef {Arrey} Movie
 * @property {string} title - The title of the movie.
 * @property {number} duration - The duration of the movie in minutes.
 * @property {Array<string>} stars - An array containing the names of the main stars of the movie.
 */

let film = {
    title: 'The Godfather',
    duration: 175,
    stars: ['Marlon Brando', 'James Caan', 'Robert Duvall']
};

/**
 * Represents a list of movies.
 * @type {Array<Object>}
 */
let films = [
    {
        title: 'The Godfather',
        duration: 175,
        stars: ['Marlon Brando', 'James Caan', 'Robert Duvall']
    },
    {
        title: 'Forrest Gump',
        duration: 142,
        stars: ['Tom Hanks', 'Robin Wright', 'Gary Sinise']
    },
    {
        title: 'Inception',
        duration: 148,
        stars: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Tom Hardy']
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        duration: 201,
        stars: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen']
    }
];

/**
 * Prints information about a movie.
 * @param {Movie} movie - The movie object containing title, duration, and stars.
 */
function printMovie(movie){
    console.log('"' + movie.title + '" lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars.join(', '));
}

/**
 * Prints information about multiple movies.
 * @param {Array<Movie>} movies - The array of movie objects.
 */
function printMovies(movies){
    for(let i = 0; i < movies.length; i++){
        printMovie(movies[i]);
        separateOutput();
    }
}

/**
 * Logs a separator line.
 */
function separateOutput(){
    console.log("------------------------------------------------");
}

// Function call
printMovies(films);
