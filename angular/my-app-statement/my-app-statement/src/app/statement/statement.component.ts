import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { type Responsabile } from './responsabile/responsabile.model';
import { RESPO_DB } from './RESPO_DB';
import { ResponsabileComponent } from './responsabile/responsabile.component';
import { CorsoComponent } from './corsi/corso/corso.component';

@Component({
  selector: 'app-statement',
  standalone: true,
  imports: [NgFor, NgIf, ResponsabileComponent, CorsoComponent],
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.css',
})
export class StatementComponent {
  listaStudenti: string[] = [
    'Paola Verdi',
    'Luca Rossi',
    'Marco Gialli',
    'Gino Gini',
  ];

  listaDocenti: {
    id: string;
    nome: string;
    disponibilita: boolean;
  }[] = [
    {
      id: 'D1',
      nome: 'Dario Mennillo',
      disponibilita: true,
    },
    {
      id: 'D2',
      nome: 'Mauro Bogliacciono',
      disponibilita: true,
    },
    {
      id: 'D3',
      nome: 'Gigi Finizio',
      disponibilita: false,
    },
  ];

  listaMaterie: string[] = ['Angular', 'Javascript', 'Php', 'Database'];
  listaRespoCorso: Responsabile[] = RESPO_DB;

  respoDisponibilita!: string;
  onMostraDispo(disponibilita: string) {
    this.respoDisponibilita = disponibilita;
    console.log(disponibilita);
    this.isClosed = false;
  }

  isClosed!: boolean;
  onIsClosed() {
    this.isClosed = true;
    // this.isClosed = !isClosed;
  }
}
