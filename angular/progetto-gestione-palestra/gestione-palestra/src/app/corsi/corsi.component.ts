
import { Component, DestroyRef, signal } from '@angular/core';
import { CorsiService } from './corsi.service';
import { Corso } from './corso/corso.model';
import { inject } from '@angular/core';
import { CorsoComponent } from './corso/corso.component';
@Component({
  selector: 'app-corsi',
  standalone: true,
  imports: [CorsoComponent],
  templateUrl: './corsi.component.html',
  styleUrl: './corsi.component.css'
})
export class CorsiComponent {

  corsi = signal<Corso[] | undefined>(undefined);
  isFetching = signal<boolean>(false);
  errorMessage = signal<string | undefined>(undefined);
  private corsiService = inject(CorsiService);
  private destroyRef = inject(DestroyRef);


  ngOnInit() {
    const subscription = this.corsiService.loadCorsi()
    .subscribe({
      next: (corsi) => {
        this.corsi.set(corsi);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    })
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
