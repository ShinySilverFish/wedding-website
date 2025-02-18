import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownComponent],
  template: `
    <app-countdown></app-countdown>
    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = 'wedding-website';
}
