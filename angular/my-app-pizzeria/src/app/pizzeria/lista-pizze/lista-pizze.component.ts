import { Component, Input } from '@angular/core';
import { PizzaComponent } from '../pizza/pizza.component';
import { type Pizza } from '../pizza/pizza.model';

@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [PizzaComponent],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css',
})
export class ListaPizzeComponent {
  @Input({ required: true }) pizze!: Pizza[];
  onShowInfo(info: string) {
    console.log(info);
  }
}
