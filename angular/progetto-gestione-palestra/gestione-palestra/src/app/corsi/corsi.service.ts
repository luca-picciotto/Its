import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import Corso from './corso/corso.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorsiService {
  private httpClient = inject(HttpClient);
  private corsiUrl = 'http://localhost:3000/corsi';
  private corsi = signal<Corso[]>([])
  
  /**
 * Recupera un elenco di corsi da un URL specificato.
 * 
 * Effettua una richiesta GET utilizzando `HttpClient` e gestisce eventuali errori.
 * In caso di errore, stampa il messaggio di errore nella console e restituisce
 * un errore personalizzato.
 * 
 * @param {string} url - L'URL da cui recuperare i corsi.
 * @param {string} errorMessage - Messaggio di errore da restituire in caso di errore.
 * @returns {Observable<Corso[]>} Un observable che emette l'elenco di corsi.
 */
  private fetchCorsi(url: string, errorMessage: string): Observable<Corso[]> {
      return this.httpClient.get<Corso[]>(url)
      .pipe(
          catchError((err) => {
              console.error(err);
              return throwError(() => new Error(errorMessage));
          })
      );
  }

  loadedCorsi = this.corsi.asReadonly();

  /**
 * Carica l'elenco dei corsi da un URL specificato.
 * 
 * Utilizza il metodo `fetchCorsi` per recuperare i corsi e gestisce
 * il risultato. Se il caricamento ha successo, imposta la lista di corsi.
 * In caso di errore, stampa l'errore nella console e restituisce un errore
 * personalizzato.
 * 
 * @returns {Observable<Corso[]>} Un observable che emette nulla al completamento.
 */
  loadCorsi(): Observable<Corso[]> {
    return this.fetchCorsi(this.corsiUrl, 'Errore nel caricamento dei corsi')
    .pipe(
      tap({
        next: (listaCorsi) => {
          return this.corsi.set(listaCorsi);
        }
      }),
      catchError((err) => {
        console.error(err);
        return throwError(() => new Error('Errore nel caricamento dei corsi'));
      })
    )
  }
    
  /**
 * Aggiunge un nuovo corso all'elenco dei corsi e lo invia al server.
 * 
 * Aggiorna la lista dei corsi nel sistema locale e invia una richiesta POST
 * al server per aggiungere il corso.
 * 
 * @param {Corso} corso - Il corso da aggiungere.
 * @returns {Observable<any>} Un observable che rappresenta la risposta del server.
 */
  addCorso(corso:Corso): Observable<any> {
    this.corsi.update(prevCorsi => [...prevCorsi, corso]);
    return this.httpClient.post(this.corsiUrl, corso)
  }

  /**
 * Elimina un corso dall'elenco dei corsi e dal server.
 * 
 * Aggiorna la lista dei corsi nel sistema locale rimuovendo il corso specificato
 * e invia una richiesta DELETE al server per eliminare il corso.
 * 
 * @param {Corso} corso - Il corso da eliminare.
 * @returns {Observable<any>} Un observable che rappresenta la risposta del server.
 */
  deleteCorso(corso: Corso): Observable<any> {
      this.corsi.update(
          (corsi) => corsi.filter((c) => c.id !== corso.id)
      )
      return this.httpClient.delete(`${this.corsiUrl}/${corso.id}`)
  }

  /**
 * Incrementa il numero di iscritti a un corso e aggiorna il server.
 * 
 * Invia una richiesta PATCH al server per aggiornare il numero di iscritti
 * del corso specificato. Dopo aver ricevuto la risposta, aggiorna la lista
 * locale dei corsi con il nuovo numero di iscritti.
 * 
 * @param {Corso} corso - Il corso di cui incrementare gli iscritti.
 * @returns {Observable<any>} Un observable che rappresenta la risposta del server.
 */
  incrementaIscritti(corso: Corso): Observable<any> {
    return this.httpClient.patch(`${this.corsiUrl}/${corso.id}`, { iscritti: corso.iscritti ++ })
      .pipe(
        tap(() => {
          // Aggiorna la lista locale dei corsi
          this.corsi.update(prevCorsi => 
            prevCorsi.map(c => 
              c.id === corso.id ? { ...c, iscritti: c.iscritti ++ } : c
            )
          );
        })
      );
  }

}
