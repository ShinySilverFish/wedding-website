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
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&display=swap');

    .countdown-container {
      display: flex;
      justify-content: center;
      gap: 15px;
      padding: 20px;
      background-color: #fafafa;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      max-width: 550px;
      margin: auto;
    }

    .countdown-box {
      text-align: center;
      background: #e0e0e0;
      color: #4a4a4a;
      padding: 15px;
      border-radius: 10px;
      min-width: 85px;
      font-family: 'Playfair Display', serif;
    }

    .countdown-value {
      font-size: 2.2rem;
      font-weight: bold;
      display: block;
      color: #333;
    }

    .countdown-label {
      font-size: 1rem;
      font-family: 'Dancing Script', cursive;
      color: #666;
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
