var Auto = /** @class */ (function () {
    function Auto(marca, modello, cilindrata, isHybrid) {
        this.isHybrid = isHybrid;
        this.km = 0;
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
    }
    Auto.prototype.guida = function (distanza) {
        // non serve deficnire il tipo di restituzione perchè gli stiamo passando un number
        this.km += distanza;
        return this.km;
    };
    Auto.prototype.accendi = function () {
        // sto definendo anche il tipo di restituzione
        return "WROOOOOM";
    };
    Auto.prototype.accediAlleInfo = function (password) {
        if (password === '1234') {
            return 'La tua auto è ibrida: ' + this.isHybrid;
        }
        else {
            return 'Non puoi accedere alle info';
        }
    };
    return Auto;
}());
var miaAuto = new Auto('Audi', 'S3', 2000, true);
console.log(miaAuto.marca);
console.log(miaAuto.modello);
console.log(miaAuto.cilindrata);
console.log(miaAuto.accendi());
console.log(miaAuto.accediAlleInfo('pippo'));
console.log(miaAuto.accediAlleInfo('1234'));
var Persona = /** @class */ (function () {
    function Persona(nome, cognome, codFisc) {
        this.nome = nome;
        this.cognome = cognome;
        this.codFisc = codFisc;
        //! posso anche non specificare la definizione attraverso il this
    }
    Persona.prototype.presentati = function () {
        var presentazione = "Ciao mi chiamo ".concat(this.nome, ", ").concat(this.cognome, ", ho il seguent codice fiscale ").concat(this.codFisc);
        return presentazione;
    };
    Persona.prototype.accediAlleInfo = function (usename, password) {
        if (usename === "Luca" && password === "abcde") {
            return this.presentati();
        }
        else {
            return "Credenziali non valide!";
        }
    };
    return Persona;
}());
var persona1 = new Persona("Anna", "Bianchi", "BNANN883533DSDJ");
console.log(persona1.accediAlleInfo("Luca", "abcde"));
