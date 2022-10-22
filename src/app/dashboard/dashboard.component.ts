import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { City } from '../city.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  CITY_LIST:City []| undefined;
  selectedCity='';
  currentWeather:any;
  forecastList=[];
  subscripton: Subscription | undefined;
  isFetching=false; // Flag to handle the spinner while fetching the data

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCityList().subscribe((city:any)=>{
      this.CITY_LIST = city;
      this.selectedCity = city[0]?.nm; // By defaul the first city in the list is selected and it's weather details is shown
      this.getWeatherDetails(this.selectedCity)
    })
    
  }

  onCityChange(city:any){
    this.selectedCity = city?.target?.value
    this.getWeatherDetails(this.selectedCity)
  }

  getWeatherDetails(city:string){
    this.isFetching =true;
    this.subscripton = forkJoin([this.weatherService.getWeather(city), this.weatherService.getForecast(city)]).subscribe((data:any)=>{
      this.currentWeather = data[0];
      this.forecastList = data[1]?.list
      this.isFetching = false;
    }
    ,(error)=>{
        this.isFetching =false
        console.log("Unable to fetch weather data for the city", new Error(error))
    })
  }

  ngOnDestroy(): void {
    if(this.subscripton){
      this.subscripton.unsubscribe();
    }
  }
}
