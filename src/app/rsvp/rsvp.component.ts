import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, withFetch } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="rsvp-section">
      <div class="rsvp-overlay"></div>
      <h2 class="rsvp-title">RSVP Now</h2>
      <p class="rsvp-subtitle">We’d love to celebrate with you! Let us know if you can make it.</p>
      <form class="rsvp-form" (ngSubmit)="onSubmit()">
        <input type="text" placeholder="Your Name" required [(ngModel)]="name" name="name" />
        <input type="email" placeholder="Your Email" required [(ngModel)]="email" name="email" />
        <select required [(ngModel)]="attending" name="attending">
          <option value="">Will you be attending?</option>
          <option value="yes">Yes, I’ll be there!</option>
          <option value="no">Sorry, I can't make it.</option>
        </select>
        <input type="text" placeholder="Plus One (Optional)" [(ngModel)]="plusOne" name="plusOne" />
        <button type="submit" class="rsvp-submit-button">Submit RSVP</button>
      </form>
      <button class="back-button" (click)="goBack()">Back to Home</button>
      <p *ngIf="responseMessage" class="response-message">{{ responseMessage }}</p>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Serif+Display&display=swap');

    .rsvp-section {
      position: relative;
      width: 100%;
      min-height: 98.2vh;
      background: url('../../assets/hero-image.jpg') center/cover no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      font-family: 'Playfair Display', serif;
      padding: 20px;
      box-sizing: border-box;
    }

    .rsvp-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }

    .rsvp-title {
      font-size: 3rem;
      font-weight: bold;
      text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.4);
      margin-bottom: 10px;
      z-index: 2;
    }

    .rsvp-subtitle {
      font-size: 1.5rem;
      font-family: 'DM Serif Display', serif;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
      margin-bottom: 30px;
      z-index: 2;
    }

    .rsvp-form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      max-width: 400px;
      z-index: 2;
    }

    .rsvp-form input,
    .rsvp-form select {
      width: 100%;
      padding: 12px;
      font-size: 1rem;
      border-radius: 8px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.2);
      color: white;
      font-family: 'Playfair Display', serif;
      backdrop-filter: blur(5px);
      transition: all 0.3s ease-in-out;
      appearance: none;
    }

    .rsvp-form input::placeholder,
    .rsvp-form select {
      color: rgba(255, 255, 255, 0.7);
    }

    .rsvp-form input:focus,
    .rsvp-form select:focus {
      border-color: #d1a87c;
      background: rgba(255, 255, 255, 0.3);
      outline: none;
    }

    .rsvp-form select {
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 12px;
    }

    .rsvp-form select option {
      background: white;
      color: #4a3f35;
    }

    .rsvp-submit-button {
      background: #d1a87c;
      color: white;
      border: none;
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

    .rsvp-submit-button:hover {
      background: linear-gradient(135deg, #e0c3a3, #d1a87c);
      transform: scale(1.05);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
    }

    .back-button {
      margin-top: 20px;
      background: transparent;
      color: #d1a87c;
      border: 2px solid #d1a87c;
      padding: 10px 20px;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
      z-index: 2;
    }

    .back-button:hover {
      background: linear-gradient(135deg, #e0c3a3, #d1a87c);
      border-color: transparent;
      color: white;
    }

    @media (max-width: 768px) {
      .rsvp-title {
        font-size: 2.5rem;
      }

      .rsvp-subtitle {
        font-size: 1.2rem;
      }

      .rsvp-form {
        max-width: 90%;
      }
    }

    @media (max-width: 480px) {
      .rsvp-title {
        font-size: 2rem;
      }

      .rsvp-subtitle {
        font-size: 1rem;
      }

      .rsvp-submit-button {
        padding: 10px 20px;
        font-size: 1rem;
      }

      .back-button {
        padding: 8px 16px;
        font-size: 0.9rem;
      }
    }
  `]
})
export class RsvpComponent {
  name: string = '';
  email: string = '';
  attending: string = '';
  plusOne: string = '';
  responseMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  goBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    const apiUrl = 'https://t7zwa94554.execute-api.eu-north-1.amazonaws.com/prod/GuestResponses';
    const apiKey = '4enSlY6gFYaPquawmH7Pd2vAhu2DUdWa26sTsWsN';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    });

    const body = {
      name: this.name,
      email: this.email,
      attending: this.attending === 'yes',
      plus_one: this.plusOne || null
    };

    this.http.post(apiUrl, body, { headers }).subscribe({
      next: (response: any) => {
        this.responseMessage = 'RSVP saved successfully!';
        console.log('RSVP saved:', response);
      },
      error: (error) => {
        this.responseMessage = 'Failed to save RSVP. Please try again.';
        console.error('Error saving RSVP:', error);
      }
    });
  }
}