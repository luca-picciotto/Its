import { Component, input } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { RESPO_DB } from './intro/RESPO_DB';
import { Responsabile } from './intro/responsabile.model';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [IntroComponent, UserComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  responsabili: Responsabile[] = RESPO_DB;
}
