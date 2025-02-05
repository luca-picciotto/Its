
import { Component, DestroyRef, signal } from '@angular/core';
import { CorsiService } from './corsi.service';
import { Corso } from './corso/corso.model';
import { inject } from '@angular/core';
import { CorsoComponent } from './corso/corso.component';
@Component({
  selector: 'app-corsi',
  standalone: true,
  imports: [CorsoComponent],
  templateUrl: './corsi.component.html',
  styleUrl: './corsi.component.css'
})
export class CorsiComponent {

  corsi = signal<Corso[] | undefined>(undefined);
  isFetching = signal<boolean>(false);
  errorMessage = signal<string | undefined>(undefined);
  private corsiService = inject(CorsiService);
  private destroyRef = inject(DestroyRef);


  /**
 * Inizializza il componente e carica i corsi.
 * 
 * Questo metodo viene eseguito all'avvio del componente. Recupera i corsi
 * tramite `CorsiService` e gestisce i dati ricevuti, gli errori e lo stato
 * di caricamento. Si assicura anche di disiscriversi dalla sottoscrizione
 * quando il componente viene distrutto.
 * 
 * @returns {void} Non restituisce alcun valore.
 */
  ngOnInit(): void {
    const subscription = this.corsiService.loadCorsi()
    .subscribe({
      next: (corsi) => {
        this.corsi.set(corsi);
      },
      error: (err) => {
        this.errorMessage.set(err.message);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    })
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
