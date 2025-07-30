// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { Weather } from './services/weather';
// import { FormsModule } from '@angular/forms';
// import { CurrentWeather } from './models/weather.model';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App implements OnInit {
//   city: string = 'Lahore'; // ✅ For the input
//   weatherData!: CurrentWeather;

//   constructor(private weatherService: Weather) {}

//   ngOnInit(): void {
//     this.weatherService.getCurrentWeather('24.8607', '67.0011').subscribe({
//       next: (data) => {
//         this.weatherData = data;
//         // console.log('🌡️ Temp:', data.main.temp);
//         // console.log('💧 Humidity:', data.main.humidity);
//         // console.log('🌬️ Wind Speed:', data.wind.speed);
//         // console.log('📍 City:', data.name);
//       },
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Required for [(ngModel)]
import { Weather } from './services/weather';
import { CurrentWeather } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Required for standalone component
  imports: [RouterOutlet, CommonModule, FormsModule], // ✅ FormsModule added here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  city: string = 'Lahore';
  weatherData!: CurrentWeather;

  constructor(private weatherService: Weather) {}

  ngOnInit(): void {
    // Optionally call initial fetch here
    this.fetchWeather();
  }

  // ✅ Define the method used in HTML
  fetchWeather(): void {
    this.weatherService.getCurrentWeatherByCity(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        console.error('Error fetching weather:', err);
      }
    });
  }
}
