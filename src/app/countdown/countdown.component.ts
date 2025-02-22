import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="countdown-container">
      <div class="countdown-box" *ngFor="let unit of timeUnits">
        <span class="countdown-value">{{ unit.value }}</span>
        <span class="countdown-label">{{ unit.label }}</span>
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap');

    .countdown-container {
      display: flex;
      justify-content: center;
      gap: 15px;
      padding: 20px;
      border-radius: 12px;
      max-width: 550px;
      margin: 20px auto;
    }

    .countdown-box {
      text-align: center;
      color: #d1a87c;
      padding: 15px;
      border-radius: 10px;
      min-width: 85px;
      border: 2px solid #d1a87c;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .countdown-value {
      font-size: 2.2rem;
      font-weight: bold;
      display: block;
      color: #d1a87c;
      font-family: 'Roboto Mono', monospace;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
    }

    .countdown-label {
      font-size: 1rem;
      font-family: 'Playfair Display', cursive;
      color: #d1a87c;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
      .countdown-container {
        gap: 10px;
        padding: 15px;
        max-width: 90%;
        margin: 15px auto;
      }

      .countdown-box {
        padding: 10px;
        min-width: 70px;
      }

      .countdown-value {
        font-size: 1.8rem;
      }

      .countdown-label {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 480px) {
      .countdown-container {
        gap: 8px;
        padding: 10px;
        max-width: 100%;
        margin: 10px auto;
      }

      .countdown-box {
        padding: 8px;
        min-width: 60px;
      }

      .countdown-value {
        font-size: 1.5rem;
      }

      .countdown-label {
        font-size: 0.8rem;
      }
    }
  `]
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate = new Date('2025-08-30T14:00:00');
  timeUnits = [
    { label: 'Days', value: 0 },
    { label: 'Hours', value: 0 },
    { label: 'Minutes', value: 0 },
    { label: 'Seconds', value: 0 }
  ];
  interval: any;

  private calculateTimeLeft() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      clearInterval(this.interval);
      this.timeUnits.forEach(unit => unit.value = 0);
      return;
    }

    this.timeUnits = [
      { label: 'Days', value: Math.floor(distance / (1000 * 60 * 60 * 24)) },
      { label: 'Hours', value: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) },
      { label: 'Minutes', value: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) },
      { label: 'Seconds', value: Math.floor((distance % (1000 * 60)) / 1000) }
    ];
  }

  ngOnInit() {
    this.calculateTimeLeft();
    this.interval = setInterval(() => this.calculateTimeLeft(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}