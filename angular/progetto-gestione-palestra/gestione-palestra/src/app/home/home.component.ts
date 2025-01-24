import { Component, DestroyRef, inject, signal } from '@angular/core';
import Corso from '../corsi/corso/corso.model';
import { CorsiService } from '../corsi/corsi.service';
import { CorsoComponent } from '../corsi/corso/corso.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CorsoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
