import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { RsvpComponent } from './rsvp/rsvp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
