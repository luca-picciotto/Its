import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css',
})
export class PizzaComponent {
  @Input({ required: true }) nome!: string;
  @Input({ required: true }) prezzo!: number;
  @Input({ required: true }) ingredienti!: string[];

  @Output() showInfo = new EventEmitter<string>();

  details!: string;

  onShowedInfo() {
    this.details =
      ' la nostra ' +
      this.nome +
      '. Provala al prezzo di: ' +
      this.prezzo +
      '. Ingredienti: ' +
      this.ingredienti;
  }
}
