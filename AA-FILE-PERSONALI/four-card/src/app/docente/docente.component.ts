import { Component } from "@angular/core";

@Component({
    selector: "docente",
    standalone: true,
    imports: [],
    templateUrl: "./docente.component.html",
    styleUrl: "./docente.component.css"
})

export class Docente {
    nome!: string ;
    cognome!: string ;
    matricola!: string;
    corso: string  = "Web Developer";
    presenza: boolean = false;
    textPresenza: string = "ENTRA";

    constructor() {
        this.nome  = "Mauro";
        this.cognome  = "Bogliaccino";
        this.matricola = "professore".toUpperCase();
    }

    presentati() {
        alert(`Mi chiamo ${this.nome} ${this.cognome}. Insegno nel corso di ${this.corso}`);
    }

    registraPresenza(): string {

        if(this.presenza == false) {
            this.presenza = true;
            alert("Sono presente!")

            return this.textPresenza = "ESCI";
        } else {
            this.presenza = false;
            alert("Sono uscito");

            return this.textPresenza = "ENTRA";
        }

    }
}