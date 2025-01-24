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
  feedbackMessage: string | null = null;

  /**
 * Gestisce la prenotazione per un corso.
 * 
 * Controlla se il corso è pieno. Se sì, mostra un messaggio di errore.
 * Altrimenti, aggiunge una prenotazione e incrementa il numero di iscritti.
 * Gestisce anche i messaggi di feedback per l'utente.
 * 
 * @param {Corso} corso - Il corso per cui si sta effettuando la prenotazione.
 * @returns {void} Non restituisce alcun valore.
 */
  onSubmit( corso: Corso ): void {
    if (corso.iscritti >= corso.capacitaMassima) {
      this.feedbackMessage = 'Corso pieno!'; 
      return;
    }
    this.prenotazioniService.addPrenotazioni({idCorso: corso.id, id: new Date().getTime()})
    .subscribe({
      next: (() => {console.log('Prenotazione aggiunta con successo!');
        // Incrementa il numero di iscritti
        this.feedbackMessage = 'Prenotazione effettuata con successo!'; 
        this.corsiService.incrementaIscritti(corso).subscribe({
          next: () => console.log('Iscritto incrementato con successo!'),
          error: (err) => console.error('Errore nell\'incremento degli iscritti:', err)
        });
      }),
      error: ((err) => {
        this.feedbackMessage = 'Errore nella prenotazione!'; // Messaggio di errore
        console.error('Errore nella prenotazione:', err);
      }),
      complete: (() => setTimeout(() => this.feedbackMessage = null, 1000))
    })
  }
}
