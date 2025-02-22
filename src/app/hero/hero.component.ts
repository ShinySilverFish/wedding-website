import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CountdownComponent],
  template: `
    <section class="hero">
      <div class="hero-overlay"></div>
      <h1 class="hero-title">Leandré & Rynhard</h1>
      <div class="hero-content">
        <p class="hero-subtitle">Join us as we celebrate our love on August 30, 2025</p>
        <p class="hero-location">Panorama Wedding Farm, Franskraal, Gansbaai, Western Cape</p>
        <app-countdown></app-countdown>
        <button class="rsvp-button" (click)="toRSVP()">RSVP Now</button>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Great+Vibes&family=DM+Serif+Display&display=swap');

    .hero {
      position: relative;
      width: 100%;
      min-height: 98.8vh;
      background: url('../../assets/hero-image.jpg') center/cover no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: white;
      font-family: 'Playfair Display', serif;
      overflow: hidden;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: bold;
      text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
      margin-top: 20px;
      z-index: 2;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      flex: 1;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }

    .hero-subtitle {
      font-size: 2rem;
      margin-bottom: 20px;
      font-family: 'DM Serif Display', serif;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
      max-width: 90%;
      word-wrap: break-word;
    }

    .hero-location {
      font-size: 1.2rem;
      margin-bottom: -30px;
      margin-top: 0px;
      font-family: 'DM Serif Display', serif;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
      max-width: 90%;
      word-wrap: break-word;
    }

    .rsvp-button {
      background: transparent;
      color: #d1a87c;
      border: 2px solid #d1a87c;
      padding: 14px 28px;
      font-size: 1.2rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
    }

    .rsvp-button:hover {
      background: linear-gradient(135deg, #e0c3a3, #d1a87c);
      border-color: transparent;
      color: white;
      transform: scale(1.05);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
        margin-top: 10px;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        margin-bottom: 15px;
        max-width: 100%;
      }

      .hero-location {
        font-size: 1rem;
        margin-bottom: -20px;
        max-width: 100%;
      }

      .hero-content {
        gap: 10px;
        padding: 0 10px;
      }

      .rsvp-button {
        padding: 10px 20px;
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }

      .hero-location {
        font-size: 0.9rem;
      }

      .rsvp-button {
        padding: 8px 16px;
        font-size: 0.9rem;
      }
    }
  `]
})
export class HeroComponent {
  constructor(private router: Router) {}
  toRSVP() {
    this.router.navigate(['/rsvp']);
  }
}