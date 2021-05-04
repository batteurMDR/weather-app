import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherTableComponent } from './components/weather-table/weather-table.component';
import { WeatherRowComponent } from './components/weather-row/weather-row.component';

@NgModule({
    declarations: [AppComponent, SearchComponent, WeatherTableComponent, WeatherRowComponent],
    imports: [BrowserModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
