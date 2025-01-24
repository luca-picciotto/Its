import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CorsiComponent } from './corsi/corsi.component';
import { AmministrazioneComponent } from './amministrazione/amministrazione.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestione-palestra';
}
