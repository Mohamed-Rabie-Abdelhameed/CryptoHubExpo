import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
