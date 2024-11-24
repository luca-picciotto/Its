import { Component } from '@angular/core';
import { utentiFinti } from './utentiFinti';

// Fuori dallae classi posso dichiarare delle variabili con scope a livelo di modulo.
// se volessi renderla accessibile anche all'esterno dovrei utilizzare 'export'

let randomIndex = Math.floor(Math.random() * utentiFinti.length)

@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css'
})
export class UtentiComponent {
  titolo: string = "Presentazione uteti";
  nomeAdmin: string = "Laura";
  cognomeAdmin: string = "Rossi";
  etaAdmin: number = 30;
  imgAdmin: string = "userImages/icon-avatar.png";
  utenti: {
    id: string,
    nome: string,
    cognome: string,
    eta: number,
    img: string
  }[] = utentiFinti;

  utenteDelMese = this.utenti[randomIndex];

  get imgPath() {
    return 'userImages/' + this.utenteDelMese.img; 
  }
}
