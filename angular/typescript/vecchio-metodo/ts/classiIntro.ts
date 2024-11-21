class Auto{
    // definisco prima le proprietà, poi i costruttori e infine i metodi
    marca: string;
    modello: string;
    cilindrata: number;
    km: number = 0;

    constructor(marca: string, modello: string, cilindrata: number, private isHybrid: boolean){
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;

    }

    guida(distanza: number){
        // non serve deficnire il tipo di restituzione perchè gli stiamo passando un number
        this.km += distanza;
        return this.km;
    }

    accendi(): string{
        // sto definendo anche il tipo di restituzione
        return "WROOOOOM";
    }

    accediAlleInfo(password: string){
        if(password === '1234'){
            return 'La tua auto è ibrida: ' + this.isHybrid;
        }else{
            return 'Non puoi accedere alle info';
        }
    }
}

let miaAuto = new Auto('Audi', 'S3', 2000, true);
console.log(miaAuto.marca);
console.log(miaAuto.modello);
console.log(miaAuto.cilindrata);
console.log(miaAuto.accendi());
console.log(miaAuto.accediAlleInfo('pippo'));
console.log(miaAuto.accediAlleInfo('1234'));


class Persona{
    constructor(public nome:string, public cognome:string, private codFisc:string){
        //! posso anche non specificare la definizione attraverso il this
    }

    presentati(): string{
        let presentazione = `Ciao mi chiamo ${this.nome}, ${this.cognome}, ho il seguent codice fiscale ${this.codFisc}`;

        return presentazione;
    }

    accediAlleInfo(usename:string, password:string): string{
        if(usename === "Luca" && password === "abcde"){
            return this.presentati();
        }else{
            return "Credenziali non valide!";
        }
    }
}

let persona1 = new Persona("Anna", "Bianchi", "BNANN883533DSDJ");

console.log(persona1.accediAlleInfo("Luca", "abcde"));


