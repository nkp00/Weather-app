import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as data from '../assets/cities-fr.json'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private BASE_URL = 'https://api.openweathermap.org/data/2.5'

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<any> {
    const url = `${this.BASE_URL}/weather?q=${location}&appid=450a9d622a56bff861d328ffbea10a4b`;
    return this.http.get(url)
  }

  getForecast(location: string): Observable<any> {
    const url = `${this.BASE_URL}/forecast/daily?q=${location}&cnt=3&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f`;
    return this.http.get(url)
  }

  getCityList(): Observable<any> {
    return this.http.get('../assets/cities-fr.json')
  }
}
