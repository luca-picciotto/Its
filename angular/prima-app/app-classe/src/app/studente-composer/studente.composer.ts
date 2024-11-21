import { Component } from "@angular/core";

@Component({
    selector: "comp-studente",
    standalone: true,
    imports: [],
    templateUrl: "./studente.composer.html",
    styleUrl: "./studente.composer.css"
})

export class StudenteComponent{
    nome: string = "Luca";
    cognome: string = "Picciotto";
    matricola: string  = "icts23-25.422";
    corso: string = "Web Developer";
    presenza: boolean = true;

    // segnaPresenza(){ 

    // }
}
