import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent implements OnChanges {
  @Input() weatherDetail: any
  minTemp: string | undefined;
  maxTemp: string | undefined
  constructor() { }

  ngOnChanges(): void {
    const { min, max } = this.weatherDetail?.temp
    this.minTemp = min,
    this.maxTemp = max
  }
// Depending upon the weather Id this method returns the appropriate icon class
  getIconClassName() {
    return 'wi h3 wi-icon-' + this.weatherDetail?.weather[0]?.id
  }

}
