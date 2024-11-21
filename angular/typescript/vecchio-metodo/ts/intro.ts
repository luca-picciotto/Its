// Tipi di dato 

let nome: string = "Luca";
let cognome: string = "Picciotto";
let eta: number = 104;

let materie: string[] = [
    'Javascript',
    'Angular',
    'React',
    'Java'
];



//todo:  any - tipo Dinamico, cioè può assumere qualsiasi tipo io voglia
// any si usa quando devi ricevere un valore da esterno e il tipo di esso è sconosciuto o puo variare 
let corso: any;
corso = 'WebDeveloper';
corso = 42;
corso = true;



//todo in questo caso la var automobil può assumere 2 tipi
let automobile: string | boolean;
automobile = 'Peugeot';
automobile = true;
//! automobile = 4; Non può valere 



//todo Tipi Custom
type AnimaleDomestico = 'Scimmia' | 'Gatto' | 5 | boolean;

// chi sarà di tipo animaleDomestico potrà assumere soltanto uno dei valori indicati
let mioAnimaleDomestico: AnimaleDomestico = 'Gatto';
//!let mioAnimaleDomestico: AnimaleDomestico = 'Pappagallo';    darà errore

type Motocicletta = {
    marca: string,
    modello: string,
    cilindrata: number,
    km: number
}

let miaMoto: Motocicletta = {
    marca: 'Kawasaki',
    modello: 'z750',
    cilindrata: 750,
    km: 20000
}



//todo non sono obbigato a dichiarare il tipo. per cui verrà interpretato 
let presentazione = `Ciao mi presento: ${nome} ${cognome}, ho ${eta} anni. Ho una modo della ${miaMoto.marca} `;

console.log(presentazione);

let demo = document.querySelector('#demo');
demo.innerHTML = "<h2>" + presentazione + "</h2>";