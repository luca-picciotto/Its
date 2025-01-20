import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding-directive',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './two-way-binding-directive.component.html',
  styleUrl: './two-way-binding-directive.component.css',
})
export class TwoWayBindingDirectiveComponent {
  titolo: string = '';
  sommario: string = '';
  dataConsegna: string = '';
  prezzo: number = 0;

  alert: string = '';

  onSubmitForm() {
    console.log(this.titolo, this.sommario, this.prezzo, this.dataConsegna);
    if (
      this.titolo == '' ||
      this.sommario == '' ||
      this.prezzo == 0 ||
      this.dataConsegna == ''
    ) {
      this.alert = 'Stai dimenticando qualcosa! ';
    } else {
      this.titolo = '';
      this.sommario = '';
      this.prezzo = 0;
      this.dataConsegna = '';
      this.alert = '';
    }
  }
}
