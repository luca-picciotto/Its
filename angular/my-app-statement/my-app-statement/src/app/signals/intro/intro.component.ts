import { Component, computed, signal } from '@angular/core';
import { RESPO_DB } from './RESPO_DB';
const randomIndex = Math.floor(Math.random() * RESPO_DB.length);

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  // un signal è un oggetto wrapper nel quale registro un valore di qualsiasi tipo.
  // so che questo valore potrà cambiare.
  // al cambio il signal notificherà il cambiamento e quindi è in grado di aggiornare
  // la parte specifica

  // selectedRespo = RESPO_DB[randomIndex];

  selectedRespo = signal(RESPO_DB[randomIndex]);
  onSelectRespo() {
    const randomIndex = Math.floor(Math.random() * RESPO_DB.length);
    this.selectedRespo.set(RESPO_DB[randomIndex]);
    console.log(this.selectedRespo());
  }

  // get imagePath() {
  //   return this.selectedRespo().image;
  // }

  imagePath = computed(() => {
    return 'respoImg/' + this.selectedRespo().image;
  });
}
