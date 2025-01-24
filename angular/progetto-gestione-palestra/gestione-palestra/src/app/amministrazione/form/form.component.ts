import { Component, inject } from '@angular/core';
import { CorsiService } from '../../corsi/corsi.service';
import Corso from '../../corsi/corso/corso.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private corsiService = inject(CorsiService);

  enteredId!: string;
  enteredNomeCorso!: string;
  enteredDescrizione!: string;
  enteredIstruttore!: string;
  enteredDurata!: number;
  enteredCapacita!: number;
  enteredIscritti: number = 0;
  
  /**
 * Aggiunge un nuovo corso al sistema.
 * 
 * Utilizza il servizio `CorsiService` per inviare il corso specificato.
 * Stampa i dati restituiti nella console.
 * 
 * @param {Corso} corso - Il corso da aggiungere.
 * @returns {void} Non restituisce alcun valore.
 */
  onSubmit(corso: Corso): void {
    this.corsiService.addCorso(corso)
    .subscribe({
      next: (resData => {console.log(resData);
      })
    })
  }
}
