import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card.component';
import { Studente } from "./studente/studente.component";
import { Docente } from './docente/docente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Card, Studente, Docente],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'four-card';
}
