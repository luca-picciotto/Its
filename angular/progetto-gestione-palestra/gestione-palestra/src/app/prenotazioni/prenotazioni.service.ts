import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import Prenotazioni from './prenotazione/prenotazione.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  private httpClient = inject(HttpClient);
  private prenotazioniUrl = 'http://localhost:3000/prenotazioni';
  private prenotazioni = signal<Prenotazioni[]>([]);
  
  /**
 * Recupera un elenco di prenotazioni da un URL specificato.
 * 
 * Invia una richiesta GET al server per ottenere le prenotazioni. 
 * In caso di errore, stampa l'errore nella console e restituisce un errore
 * personalizzato.
 * 
 * @param {string} url - L'URL da cui recuperare le prenotazioni.
 * @param {string} errorMessage - Messaggio di errore personalizzato in caso di fallimento.
 * @returns {Observable<Prenotazioni[]>} Un observable che emette un array di prenotazioni.
 */
  private fetchPrenotazioni(url: string, errorMessage: string): Observable<Prenotazioni[]> {
    return this.httpClient.get<Prenotazioni[]>(url)
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error(errorMessage))
      })
    )
  }

  loadedPrenotazioni = this.prenotazioni.asReadonly();

  /**
 * Carica le prenotazioni e le memorizza localmente.
 * 
 * Utilizza il metodo `fetchPrenotazioni` per ottenere un elenco di prenotazioni
 * dal server. Se il caricamento ha successo, le prenotazioni vengono memorizzate
 * localmente. In caso di errore, viene restituito un messaggio di errore personalizzato.
 * 
 * @returns {Observable<Prenotazioni[]>} Un observable che emette quando le prenotazioni sono state caricate.
 */
  loadPrenotazioni(): Observable<Prenotazioni[]> {
    return this.fetchPrenotazioni(this.prenotazioniUrl, 'Errore nel caricamento delle prenotazioni')
    .pipe(
      tap({
        next: (listaPrenotazioni) => {
          return this.prenotazioni.set(listaPrenotazioni);
        }
      })
    )
  }

  /**
 * Aggiunge una nuova prenotazione e la invia al server.
 * 
 * Aggiorna la lista locale delle prenotazioni aggiungendo la prenotazione specificata
 * e invia una richiesta POST al server per memorizzarla.
 * 
 * @param {Prenotazioni} prenotazione - La prenotazione da aggiungere.
 * @returns {Observable<any>} Un observable che rappresenta la risposta del server.
 */
  addPrenotazioni(prenotazione: Prenotazioni): Observable<any> {
    this.prenotazioni.update(prevPrenotazioni => [...prevPrenotazioni, prenotazione]);
    return this.httpClient.post(this.prenotazioniUrl, prenotazione)
  }

/**
 * Elimina una prenotazione dall'elenco e dal server.
 * 
 * Aggiorna la lista locale delle prenotazioni rimuovendo la prenotazione specificata
 * e invia una richiesta DELETE al server per eliminarla.
 * 
 * @param {Prenotazioni} prenotazione - La prenotazione da eliminare.
 * @returns {Observable<any>} Un observable che rappresenta la risposta del server.
 */
  deletePrenotazione(prenotazione: Prenotazioni): Observable<any> {
    this.prenotazioni.update(
      (prenotazioni) => prenotazioni.filter((p) => p.id !== prenotazione.id)
    )
    return this.httpClient.delete(`${this.prenotazioniUrl}/${prenotazione.id}`)
  }

}

