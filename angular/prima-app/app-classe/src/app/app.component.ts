import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudenteComponent } from './studente-composer/studente.composer';
import { DocenteComponet } from './docente-composer/docente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudenteComponent, DocenteComponet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-classe';
}
