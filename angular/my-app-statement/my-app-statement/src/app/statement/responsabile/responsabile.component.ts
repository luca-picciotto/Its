import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Responsabile } from './responsabile.model';

@Component({
  selector: 'app-responsabile',
  standalone: true,
  imports: [],
  templateUrl: './responsabile.component.html',
  styleUrl: './responsabile.component.css',
})
export class ResponsabileComponent {
  @Input({ required: true }) respo!: Responsabile;
  @Output() disponibilita = new EventEmitter();

  onMostraDispo(nCorsi: number) {
    let stringaDisponibilita = '';
    if (nCorsi < 4) {
      stringaDisponibilita = 'Hai ancora posto per dei corsi!';
    } else {
      stringaDisponibilita = 'Non hai più posto per dei corsi!';
    }
    this.disponibilita.emit(stringaDisponibilita);
  }
}
