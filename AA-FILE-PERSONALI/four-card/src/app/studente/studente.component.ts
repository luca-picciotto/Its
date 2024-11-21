import { Component } from "@angular/core";

@Component({
    selector: "studente",
    standalone: true,
    imports: [],
    templateUrl: "./studente.component.html",
    styleUrl: "./studente.component.css"
})

export class Studente {
    nome!: string;
    cognome!: string;
    matricola!: string;
    corso: string = "Web Developer";
    presenza: boolean = false;
    textPresenza: string = "ENTRA";
    img: string = "https://s13.postimg.cc/5al19x0d3/media_img.jpg"
    
    // constructor (nome: string, cognome: string, matricola: string) {

    // }

    constructor() {
        this.nome = "Luca";
        this.cognome = "Picciotto";
        this.matricola = "icts23-25.422".toUpperCase();
    }

    presentati() {
        alert(`Mi chiamo ${this.nome} ${this.cognome}. Frequento il corso di ${this.corso}`);
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