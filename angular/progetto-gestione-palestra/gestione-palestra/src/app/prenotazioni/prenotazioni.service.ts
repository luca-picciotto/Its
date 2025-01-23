import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import Prenotazioni from './prenotazione/prenotazione.model';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  private httpClient = inject(HttpClient);
  private prenotazioniUrl = 'http://localhost:3000/prenotazioni';
  private prenotazioni = signal<Prenotazioni[]>([]);
  
  private fetchPrenotazioni(url: string, errorMessage: string) {
    return this.httpClient.get<Prenotazioni[]>(url)
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error(errorMessage))
      })
    )
  }

  loadedPrenotazioni = this.prenotazioni.asReadonly();
  loadPrenotazioni() {
    return this.fetchPrenotazioni(this.prenotazioniUrl, 'Errore nel caricamento delle prenotazioni')
    .pipe(
      tap({
        next: (listaPrenotazioni) => {
          return this.prenotazioni.set(listaPrenotazioni);
        }
      })
    )
  }

  addPrenotazioni(prenotazione: Prenotazioni) {
    this.prenotazioni.update(prevPrenotazioni => [...prevPrenotazioni, prenotazione]);
    return this.httpClient.post(this.prenotazioniUrl, prenotazione)
  }

  deletePrenotazione(prenotazione: Prenotazioni) {
    this.prenotazioni.update(
      (prenotazioni) => prenotazioni.filter((p) => p.idPrenotazione !== prenotazione.idPrenotazione)
    )
    return this.httpClient.delete(`${this.prenotazioniUrl}/${prenotazione.idPrenotazione}`)
  }

}

