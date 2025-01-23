import { Component, inject, input } from '@angular/core';
import { Corso } from './corso.model';
import { PrenotazioniService } from '../../prenotazioni/prenotazioni.service';
import { CorsiService } from '../corsi.service';

@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.css'
})
export class CorsoComponent {
  corso = input.required<Corso>();
  private prenotazioniService = inject(PrenotazioniService);
  private corsiService = inject(CorsiService);

  onSubmit( corso: Corso ) {
    if (corso.iscritti > corso.capacitaMassima) {
      alert('Il corso è pieno!');
      return;
    }
    this.prenotazioniService.addPrenotazioni({idCorso: corso.id, idPrenotazione: new Date().getTime()})
    .subscribe({
      next: (resData => {console.log('Prenotazione aggiunta con successo!');
        // Incrementa il numero di iscritti
        this.corsiService.incrementaIscritti(corso).subscribe({
          next: () => console.log('Iscritto incrementato con successo!'),
          error: (err) => console.error('Errore nell\'incremento degli iscritti:', err)
        });
       })
    })
  }
}
