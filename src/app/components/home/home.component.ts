import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';
import { CarouselComponent } from '../carousel/carousel.component';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {
    AOS.init({
      offset: -50,
      once: true,
    });
  }

  speakers = [
    {
      name: 'Russell Armand',
      image: 'assets/images/speakers/Russell Armand.jpg',
      company: 'Ledger Enterprise',
    },
    {
      name: 'Danny Winn',
      image: 'assets/images/speakers/Danny Winn.jpg',
      company: 'CoinMENA',
    },
    {
      name: 'Ilyas Vali',
      image: 'assets/images/speakers/Ilyas Vali.jpg',
      company: 'Bitget',
    },
    {
      name: 'Lex Sokolin',
      image: 'assets/images/speakers/Lex Sokolin.jpg',
      company: 'Binance',
    },
    {
      name: 'Pieter Vanhove',
      image: 'assets/images/speakers/Pieter Vanhove.jpg',
      company: 'Fireblocks',
    },
    {
      name: 'Fred Zhou',
      image: 'assets/images/speakers/Fred Zhou.jpg',
      company: 'Alserkal Group',
    },
    {
      name: 'Victoria Scholar',
      image: 'assets/images/speakers/Victoria Scholar.jpg',
      company: 'Ripple',
    },
    {
      name: 'Stephen Lindsay',
      image: 'assets/images/speakers/Stephen Lindsay.jpg',
      company: 'Vechain',
    },
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
