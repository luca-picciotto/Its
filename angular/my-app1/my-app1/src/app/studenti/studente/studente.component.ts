import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-studente',
  standalone: true,
  imports: [],
  templateUrl: './studente.component.html',
  styleUrl: './studente.component.css',
})
export class StudenteComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) nome!: string;
  @Input({ required: true }) cognome!: string;

  // matricola!: string;

  get generaMats() {
    return (
      this.nome.charAt(0) +
      Math.floor(Math.random() * 100) +
      this.cognome.charAt(0)
    );
  }

  @Output() selectStud = new EventEmitter<string>();

  onSelectedStud() {
    this.selectStud.emit('Ciao mi chiamo: ' + this.nome + ' ' + this.cognome);
  }
}
