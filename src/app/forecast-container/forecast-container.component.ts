import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-container',
  templateUrl: './forecast-container.component.html',
  styleUrls: ['./forecast-container.component.css']
})
export class ForecastContainerComponent {
  constructor() {
    const date= new Date();
    this.DAYS= [this.WEEKDAYS[date.getDay()%7], this.WEEKDAYS[(date.getDay()+1)%7],this.WEEKDAYS[(date.getDay()+2)%7] ]
   }
  @Input() forecastList:any
   WEEKDAYS=['SUN','MON', 'TUE','WED','THU','FRI','SAT'] // Hardcoded weekdays
   DAYS:string[]
}
