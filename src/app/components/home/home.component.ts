import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
   sponsors = [
    {
      name: 'a16zCryptoResearch',
      image: 'assets/images/sponsors/a16zCryptoResearch.png',
      website: 'https://a16zcrypto.com/'
    },
    {
      name: 'casper',
      image: 'assets/images/sponsors/casper.png',
      website: 'https://casper.network/'
    },
    {
      name: 'iohk',
      image: 'assets/images/sponsors/iohk.png',
      website: 'https://iohk.io/'
    },
    {
      name: 'jpMorganChaseAndCo',
      image: 'assets/images/sponsors/jpMorganChaseAndCo.png',
      website: 'https://www.jpmorganchase.com/'
    },
    {
      name: 'pqshield',
      image: 'assets/images/sponsors/pqshield.png',
      website: 'https://pqshield.com/'
    },
    {
      name: 'ibm',
      image: 'assets/images/sponsors/ibm.png',
      website: 'https://www.ibm.com/'
    },
    {
      name: 'nttResearch',
      image: 'assets/images/sponsors/nttResearch.png',
      website: 'https://ntt-research.com/'
    },
    {
      name: 'hyperledgerFoundation',
      image: 'assets/images/sponsors/hyperledgerFoundation.png',
      website: 'https://www.hyperledger.org/'
    }
  ];
  
}
