import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HeroComponent } from './app/hero/hero.component';
import { RsvpComponent } from './app/rsvp/rsvp.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'rsvp', component: RsvpComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
}).catch(err => console.error(err));
