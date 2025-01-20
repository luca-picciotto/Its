import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-signals',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './two-way-signals.component.html',
  styleUrl: './two-way-signals.component.css',
})
export class TwoWaySignalsComponent {
  nome = signal<string>('');
  cognome = signal<string>('');
  dataNascita = signal<string>('');

  onSubmitForm() {
    console.log(this.nome(), this.cognome(), this.dataNascita());
  }

  onEsempio() {
    this.nome.set('Mario');
    this.cognome.set('Rossi');
    this.dataNascita.set('01/01/2000');
  }
}
