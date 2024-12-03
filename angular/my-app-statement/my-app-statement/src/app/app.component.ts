import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatementComponent } from './statement/statement.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatementComponent, SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
