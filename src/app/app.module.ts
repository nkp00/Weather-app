import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from  '@angular/common/http';
import { ForecastContainerComponent } from './forecast-container/forecast-container.component';
import { ForecastItemComponent } from './forecast-item/forecast-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForecastContainerComponent,
    ForecastItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
