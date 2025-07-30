import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Weather } from './services/weather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private weatherService: Weather) {}
  ngOnInit(): void {
    this.weatherService.getWeatherData('24.8607', '67.0011', 'EN')
      .subscribe({
        next: (Response) => {
          console.log(Response)
        }
      })
  }
}
