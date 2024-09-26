let movie = {
    title: 'Il gladiatore',
    duration: 2.35,
    stars: ['Russel Crowe', 'Joaquin Phoenix', 'Connie Nielsen', 'Djimon Hounsou']
}


let movies = [
    {
        title: 'Interstellar',
        duration: 2.50,
        stars: ['Matthew McConaughey', 'Jessica Chastain', 'Anne Hathaway', 'Timothée Chalamet', 'Mackenzie Foy', 'Matt Damon']
    },
    {
        title: 'La Teoria del Tutto',
        duration: 2,
        stars: ['Eddie Redmayne', 'Felicity Jones', 'Charlie Cox', 'David Thewlis']
    },
    {
        title: 'Split',
        duration: 2,
        stars: ['James McAvoy', 'Anya Taylor-Joy', 'Jessica Sula']
    }
]

function printMovie (movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' hours. Stars: ' + movie.stars.join(', '));
}

printMovie(movie);

console.log('All movies:');
for (let i = 0; i < movies.length; i++) {
    printMovie(movies[i]);
}