import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  
  sponsors = [
    {
      name: 'a16zCryptoResearch',
      image: 'assets/images/sponsors/a16zCryptoResearch.png',
      website: 'https://a16zcrypto.com/',
    },
    {
      name: 'casper',
      image: 'assets/images/sponsors/casper.png',
      website: 'https://casper.network/',
    },
    {
      name: 'iohk',
      image: 'assets/images/sponsors/iohk.png',
      website: 'https://iohk.io/',
    },
    {
      name: 'jpMorganChaseAndCo',
      image: 'assets/images/sponsors/jpMorganChaseAndCo.png',
      website: 'https://www.jpmorganchase.com/',
    },
    {
      name: 'pqshield',
      image: 'assets/images/sponsors/pqshield.png',
      website: 'https://pqshield.com/',
    },
    {
      name: 'ibm',
      image: 'assets/images/sponsors/ibm.png',
      website: 'https://www.ibm.com/',
    },
    {
      name: 'nttResearch',
      image: 'assets/images/sponsors/nttResearch.png',
      website: 'https://ntt-research.com/',
    },
    {
      name: 'hyperledgerFoundation',
      image: 'assets/images/sponsors/hyperledgerFoundation.png',
      website: 'https://www.hyperledger.org/',
    },
  ];
}
