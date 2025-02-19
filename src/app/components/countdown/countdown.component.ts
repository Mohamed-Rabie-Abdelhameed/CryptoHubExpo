import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css',
})
export class CountdownComponent implements OnInit {
  countDownDate: number = new Date('Sep 15, 2024 17:30:00').getTime();
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  constructor() {}

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;

    if (distance < 0) {
      // Countdown date has passed
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    } else {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }
}
