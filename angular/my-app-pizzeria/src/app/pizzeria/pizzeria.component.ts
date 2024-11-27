import { Component, Output } from '@angular/core';
import { type Pizza } from './pizza/pizza.model';
import { ListaPizzeComponent } from './lista-pizze/lista-pizze.component';
@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzeComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css',
})
export class PizzeriaComponent {
  pizze: Pizza[] = [
    {
      nome: 'Margherita',
      prezzo: 6.5,
      ingredienti: ['Pomodoro', 'Mozzarella', 'Basilico'],
      img: 'https://picsum.photos/200/300',
    },
    {
      nome: 'Diavola',
      prezzo: 8,
      ingredienti: ['Pomodoro', 'Mozzarella', 'Salame Piccante'],
      img: 'https://picsum.photos/200/300',
    },
    {
      nome: 'Quattro Formaggi',
      prezzo: 9,
      ingredienti: ['Mozzarella', 'Gorgonzola', 'Fontina', 'Grana Padano'],
      img: 'https://picsum.photos/200/300',
    },
    {
      nome: 'Vegetariana',
      prezzo: 7.5,
      ingredienti: [
        'Pomodoro',
        'Mozzarella',
        'Peperoni',
        'Zucchine',
        ' Melanzane',
      ],
      img: 'https://picsum.photos/200/300',
    },
  ];
}
