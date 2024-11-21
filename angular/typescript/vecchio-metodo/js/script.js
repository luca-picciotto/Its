let nome = "Luca ";
let cognome = "Picciotto";
let matricola = "A104";
let eta = 104;
let presenta = true;

let demo = document.querySelector('#demo');

demo.textContent = `Ciao mi presento: ${nome} ${cognome}, ho ${eta} anni.`;

class Studente {
    constructor(nome, cognome, matricola, eta){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.eta = eta;
    }

    presentati = function
}