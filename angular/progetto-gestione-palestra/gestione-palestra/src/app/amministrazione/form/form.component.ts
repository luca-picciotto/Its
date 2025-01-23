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

  enteredId!: number;
  enteredNomeCorso!: string;
  enteredDescrizione!: string;
  enteredIstruttore!: string;
  enteredDurata!: number;
  enteredCapacita!: number;
  enteredIscritti: number = 0;
  
  onSubmit(corso: Corso) {
    this.corsiService.addCorso(corso)
    .subscribe({
      next: (resData => {console.log(resData);
      })
    })
  }
}
