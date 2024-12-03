import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  nome = input.required<string>();
  congnome = input.required<string>();
  imageAvatar = input.required<string>();

  image = computed(() => {
    return 'respoImg/' + this.imageAvatar();
  });
}
