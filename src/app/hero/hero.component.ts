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
      <button class="more-info-button" (click)="openMoreInfoModal()">More Info</button>

      <div class="modal-overlay" *ngIf="modalVisible" (click)="closeModal()"></div>
      <div class="modal" *ngIf="modalVisible">
        <div class="modal-content">
          <span class="close-button" (click)="closeModal()">&times;</span>
          <h2>Wedding Details</h2>
          <div class="divider"></div>
          <ul class="wedding-details">
            <li>
              <span class="detail-label">Location:</span>
              <span class="detail-value">Panorama Wedding Farm, Franskraal, Gansbaai, Western Cape</span>
            </li>
            <li>
              <span class="detail-label">Accommodation:</span>
              <span class="detail-value">Please contact (+27)84 767 4688 for assistance</span>
            </li>
            <li>
              <span class="detail-label">Reception Time:</span>
              <span class="detail-value">14:00</span>
            </li>
            <li>
              <span class="detail-label">Dress Code:</span>
              <span class="detail-value">Formal</span>
            </li>
            <li>
              <span class="detail-label">Colour Scheme:</span>
              <span class="detail-value">White, burgundy and sage green</span>
            </li>
            <li>
              <span class="detail-label">Additional Info:</span>
              <span class="detail-value">It is not necessary to stick to the colour scheme of the wedding</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Great+Vibes&family=DM+Serif+Display&display=swap');

    .hero {
      position: relative;
      width: 100%;
      min-height: 98.3vh;
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

    .more-info-button {
      position: absolute;
      bottom: 30px;
      right: 30px;
      z-index: 2;
      background: transparent;
      border: 2px solid #d1a87c;
      color: #d1a87c;
      padding: 10px 20px;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    .more-info-button:hover {
      background: linear-gradient(135deg, #e0c3a3, #d1a87c);
      border-color: transparent;
      color: white;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: 3;
    }

    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 235, 224, 0.9));
      padding: 2rem;
      border-radius: 12px;
      z-index: 4;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .modal-content {
      font-family: 'Playfair Display', serif;
      color: #4a3f35;
      position: relative;
    }

    .modal-content h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #d1a87c;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
    }

    .divider {
      width: 100%;
      height: 1px;
      background: #d1a87c;
      margin: 1rem 0;
    }

    .wedding-details {
      list-style: none;
      padding: 0;
      text-align: left;
      margin-top: 1rem;
    }

    .wedding-details li {
      display: grid;
      grid-template-columns: 120px 1fr;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 1rem;
      line-height: 1.5;
      font-family: 'DM Serif Display', serif;
    }

    .detail-label {
      font-weight: bold;
      color: #d1a87c;
    }

    .detail-value {
      color: #4a3f35;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 1.5rem;
      cursor: pointer;
      color: #d1a87c;
      transition: color 0.3s ease-in-out;
    }

    .close-button:hover {
      color: #b8926b;
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

      .modal {
        width: 95%;
        padding: 1rem;
        max-height: 80vh;
      }

      .modal-content {
        font-size: 0.9rem;
      }

      .close-button {
        top: 5px;
        right: 10px;
        font-size: 1.2rem;
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
  modalVisible = false;

  constructor(private router: Router) {}

  toRSVP() {
    this.router.navigate(['/rsvp']);
  }

  openMoreInfoModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }
}