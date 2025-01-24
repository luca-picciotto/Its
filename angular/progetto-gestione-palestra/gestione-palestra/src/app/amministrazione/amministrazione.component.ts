import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CorsiService } from '../corsi/corsi.service';
import Corso from '../corsi/corso/corso.model';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-amministrazione',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './amministrazione.component.html',
  styleUrl: './amministrazione.component.css'
})
export class AmministrazioneComponent {
  
  private corsiService = inject(CorsiService);
  errorMessage = signal<string | undefined>(undefined);
  corsi = this.corsiService.loadedCorsi;
  
  /**
 * Inizializza il componente e carica i corsi disponibili all'avvio.
 * Questo metodo viene eseguito automaticamente quando il componente viene creato.
 * 
 * Utilizza il servizio `CorsiService` per recuperare i corsi e gestisce eventuali errori
 * durante il caricamento. In caso di errore, il messaggio di errore viene impostato 
 * utilizzando `errorMessage.set()`. Una volta completato il caricamento, viene 
 * stampato un messaggio di conferma nella console.
 * 
 * @returns {void} Non restituisce alcun valore.
 * 
 * @throws {Error} Se il caricamento dei corsi fallisce, viene gestito 
 *                 internamente e il messaggio di errore viene impostato.
 */
  ngOnInit(): void {
    this.corsiService.loadCorsi()
    .subscribe({
      error: (err) => {
        this.errorMessage.set(err.message);},
      complete: () => {
        console.log("Caricati");
        
      }
    })
  }

  /**
 * Elimina un corso dal sistema.
 * 
 * Utilizza il servizio `CorsiService` per rimuovere il corso specificato.
 * Stampa un messaggio di conferma nella console con i dati restituiti.
 * 
 * @param {Corso} corso - Il corso da eliminare.
 * @returns {void} Non restituisce alcun valore.
 */
  removeCorso(corso: Corso): void {
    this.corsiService.deleteCorso(corso).subscribe({
      next: (resData => {
        console.log("Stai eliminando", resData);
        
      })
    })
  }

  
}
