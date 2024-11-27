import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { SecondoComponent } from './secondo-component/secondo.component';
import { UtentiComponent } from './utenti/utenti.component';
import { EsercizioComponent } from "./esercizio/esercizio.component";

// @Component si chiama Decorato ed è una caratteristica di TS
// il component difinisce attraverso un oggetto JS come è fatta la classe sottostante e di che "tipo"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  EsercizioComponent, EsercizioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'my-app0-intro';

  nomeSviluppatore: string = "Luca";
  corso: string = "Web Developer";
  presenza: boolean = true;
  sede: string = "Piazza dei mestier"

  constructor(){
    console.log(`Mi chiamo ${this.nomeSviluppatore}, frequento il corso ${this.corso}. Oggi sono presente: ${this.presenza}. Nella sede di ${this.sede}`);
    
  }
}
