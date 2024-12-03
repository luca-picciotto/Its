import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.css',
})
export class CorsoComponent {
  @Input({ required: true }) disponibilita!: string;
  @Output() isClosed = new EventEmitter<boolean>();

  onIsClosed() {
    console.log(this.isClosed);

    this.isClosed.emit();
  }
}
