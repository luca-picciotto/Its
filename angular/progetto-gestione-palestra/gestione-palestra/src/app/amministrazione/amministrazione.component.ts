import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CorsiService } from '../corsi/corsi.service';
import Corso from '../corsi/corso/corso.model';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-amministrazione',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './amministrazione.component.html',
  styleUrl: './amministrazione.component.css'
})
export class AmministrazioneComponent {
  private corsiService = inject(CorsiService);
  
  corsi = this.corsiService.loadedCorsi;
  
  ngOnInit() {
    this.corsiService.loadCorsi()
    .subscribe({
      
      complete: () => {
        console.log("Caricati");
        
      }
    })
  }

  removeCorso(corso: Corso) {
    this.corsiService.deleteCorso(corso).subscribe({
      next: (resData => {
        console.log("Stai eliminando", resData);
        
      })
    })
  }

  
}
