import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatementComponent } from './statement/statement.component';
import { SignalsComponent } from './signals/signals.component';
import { TwoWayBindingDirectiveComponent } from './two-way-binding-directive/two-way-binding-directive.component';
import { TwoWaySignalsComponent } from './two-way-signals/two-way-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StatementComponent,
    SignalsComponent,
    TwoWayBindingDirectiveComponent,
    TwoWaySignalsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
