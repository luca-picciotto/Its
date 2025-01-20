import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Utente } from './utente.model';
import { UtenteComponent } from './utente/utente.component';
import { UtentiPreferitiComponent } from './utenti-preferiti/utenti-preferiti.component';
import { UtentiService } from './utenti.service';

@Component({
  selector: 'app-utenti',
  standalone: true,
  imports: [UtenteComponent, UtentiPreferitiComponent],
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.css',
})
export class UtentiComponent implements OnInit{
  utenti = signal<Utente[] | undefined>(undefined);
  isFetching = signal(false);

  // per poter utilizzare i metodi dell'http-client
  // lo devo iniettare qui nella classe e dichiarare nel main (appConfig).
    // private httpClient = inject(HttpClient);
    private destroyRef = inject(DestroyRef);
    private usersService = inject(UtentiService)
//   getUsers() {
//     this.httpClient.get<Utente[]>('http://localhost:3000/users')
//     .subscribe({
//         next: (resData) => {
//             this.utenti.set(resData);
//             console.log("Gli utenti sono i seguenti: ", this.utenti());         
//         }
//     })
//   }

    // Voglio caricare i miei utenti dal momento in cui accedo all pagina. 
    // per poter usare ngOnInit bisongna implementare l'interfaccia OnInit => "export class UtentiComponent implements OnInit"
    ngOnInit() {
        // const subscription = this.httpClient.get<Utente[]>('http://localhost:3000/users')
        // .subscribe({
        //     // 'next' è simile alla funzione .then in js
        //     next: (resData) => {
        //         this.utenti.set(resData);
        //         console.log("Gli utenti sono i seguenti: ", this.utenti());         
        //     },
        //     // la funzione complete viene eseguita al completamento del 'next' (simile al .finally in js)
        //     complete: () => {
        //         this.isFetching.set(false);
        //     }
        // });

        // // destroyRef distrugge la chiamata
        
        // this.destroyRef.onDestroy(() => {
        //     subscription.unsubscribe();
        // })

        const subscription = this.usersService.loadUtenti()
        .subscribe({
            next: ((resData) => {
                this.utenti.set(resData);
            }),
            complete: () => {
                this.isFetching.set(false);
            }
        })

        this.destroyRef.onDestroy(() => {
            subscription.unsubscribe();
        })
    }

    onSelectedUser(user: Utente) {
        // this.httpClient.post('http://localhost:3000/utentiPreferiti', user)
        // .subscribe({
        //     next: ((resData) => {
        //         console.log("Hai appena aggiunto questo user: ", resData);
                
        //     })
        // })

        this.usersService.addUtentePreferito(user)
        .subscribe({
            next: (resData) => {
                console.log(resData);
                
            }
        })
    }


}
