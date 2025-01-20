import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Corso from './corso/corso.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorsiService {
    private httpClient = inject(HttpClient);
    private corsiUrl = 'http://localhost:3000/corsi';

    private fetchCorsi(url: string, errorMessage: string) {
        return this.httpClient.get<Corso[]>(url)
        .pipe(
            catchError((err) => {
                console.error(err);
                return throwError(() => new Error(errorMessage));
            })
        );
    }

    loadCorsi() {
        return this.fetchCorsi(this.corsiUrl, 'Errore nel caricamento dei corsi');
    }
}
