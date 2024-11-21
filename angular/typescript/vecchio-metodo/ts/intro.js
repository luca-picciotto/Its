// Tipi di dato 
var nome = "Luca";
var cognome = "Picciotto";
var eta = 104;
var materie = [
    'Javascript',
    'Angular',
    'React',
    'Java'
];
//todo:  any - tipo Dinamico, cioè può assumere qualsiasi tipo io voglia
// any si usa quando devi ricevere un valore da esterno e il tipo di esso è sconosciuto o puo variare 
var corso;
corso = 'WebDeveloper';
corso = 42;
corso = true;
//todo in questo caso la var automobil può assumere 2 tipi
var automobile;
automobile = 'Peugeot';
automobile = true;
// chi sarà di tipo animaleDomestico potrà assumere soltanto uno dei valori indicati
var mioAnimaleDomestico = 'Gatto';
var miaMoto = {
    marca: 'Kawasaki',
    modello: 'z750',
    cilindrata: 750,
    km: 20000
};
//todo non sono obbigato a dichiarare il tipo. per cui verrà interpretato 
var presentazione = "Ciao mi presento: ".concat(nome, " ").concat(cognome, ", ho ").concat(eta, " anni. Ho una modo della ").concat(miaMoto.marca, " ");
console.log(presentazione);
var demo = document.querySelector('#demo');
demo.innerHTML = "<h2>" + presentazione + "</h2>";
