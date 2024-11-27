import { Component } from '@angular/core';
import { StudenteComponent } from './studente/studente.component';
import { DUMMY_STUDS } from './DUMMY_STUDS';
import { type Studente } from './studente/studente.model';

@Component({
  selector: 'app-studenti',
  standalone: true,
  imports: [StudenteComponent],
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.css',
})
export class StudentiComponent {
  // studenti = [
  //   {
  //     id: "S1",
  //     nome: "Mario",
  //     cognome: "Rossi"
  //   },
  //   {
  //     id: "S2",
  //     nome: "Laura",
  //     cognome: "Verdi"
  //   }
  // ];

  // id: string = "S1";
  // nome: string = "Mario";
  // cognome: string = "Rossi";

  // id2: string = "S2";
  // nome2: string = "Laura";
  // cognome2: string = "Verdi";

  studenti: Studente[] = DUMMY_STUDS;

  onSelectStud(info: string) {
    console.log('Sono nel parent e stampo la seguente info: ' + info);
  }
}
