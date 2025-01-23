import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import Corso from './corso/corso.model';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorsiService {
  private httpClient = inject(HttpClient);
  private corsiUrl = 'http://localhost:3000/corsi';
  private corsi = signal<Corso[]>([])
  
  private fetchCorsi(url: string, errorMessage: string) {
      return this.httpClient.get<Corso[]>(url)
      .pipe(
          catchError((err) => {
              console.error(err);
              return throwError(() => new Error(errorMessage));
          })
      );
  }

  loadedCorsi = this.corsi.asReadonly();
  loadCorsi() {
    return this.fetchCorsi(this.corsiUrl, 'Errore nel caricamento dei corsi')
    .pipe(
      tap({
        next: (listaCorsi) => {
          return this.corsi.set(listaCorsi);
        }
      })
    )
  }
    
  addCorso(corso:Corso) {
    this.corsi.update(prevCorsi => [...prevCorsi, corso]);
    return this.httpClient.post(this.corsiUrl, corso)
  }

  deleteCorso(corso: Corso) {
      this.corsi.update(
          (corsi) => corsi.filter((c) => c.id !== corso.id)
      )
      return this.httpClient.delete(`${this.corsiUrl}/${corso.id}`)
  }

  incrementaIscritti(corso: Corso) {
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
