import { Component } from "@angular/core";
import { SecondoComponent } from "../secondo-component/secondo.component";

@Component({
    selector: "app-primo",
    //todo è solo una string ache vve nell'html, può essere chiamato come si vuole (es. selector: "gigi-finizio")
    standalone: true,
    imports: [SecondoComponent],
    templateUrl: "./primo-component.component.html",
    styleUrl: "./primo-component.component.css"
})
export class PrimoComponentComponent{
    sede: string = "Piazza dei mestieri";
    citta: string = "Torino";
    numPartecipanti: number = 28;
    presenza: boolean = true; 
    respoCorso!: string;

    constructor(){
        console.log(`Sono in ${this.sede}`);
        this.assegnaRespo();
    }
    
    assegnaRespo(){
        this.respoCorso = "Davide Mantovani";
    
    }
}