import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CurrentWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  constructor(private http: HttpClient) {}

  getCurrentWeather(
    lat: string,
    lon: string,
    lang: string = 'EN'
  ): Observable<any> {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', environment.openWeatherAPIKey)
      .set('units', 'metric') // for Celsius
      .set('lang', lang);

    return this.http.get<CurrentWeather>(environment.weatherApiBaseUrl, {
      params,
    });
  }

  getCurrentWeatherByCity(city: string): Observable<CurrentWeather> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', environment.openWeatherAPIKey)
      .set('units', 'metric');

    return this.http.get<CurrentWeather>(environment.weatherApiBaseUrl, {
      params,
    });
  }
}
