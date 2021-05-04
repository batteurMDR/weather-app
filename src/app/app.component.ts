import { Component } from '@angular/core';
import { Weather, WeatherService } from './services/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public weather: Weather = null;
    public error: string = null;

    constructor(private _weatherService: WeatherService) {}

    public searchCity(cityToSearch: string): void {
        this._weatherService.getWeatherForCity(cityToSearch).subscribe(
            (weather) => {
                this.error = null;
                this.weather = weather;
            },
            (err) => {
                this.error = 'Ooops, impossible de trouver cette ville';
            }
        );
    }
}
