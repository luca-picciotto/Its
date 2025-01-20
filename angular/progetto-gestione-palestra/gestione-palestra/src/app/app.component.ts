import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CorsiComponent } from './corsi/corsi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CorsiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestione-palestra';
}
