import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/services/weather.service';
import { stringToSlug } from 'src/app/utils/string.utils';

@Component({
    selector: 'app-weather-table',
    templateUrl: './weather-table.component.html',
    styleUrls: ['./weather-table.component.scss'],
})
export class WeatherTableComponent implements OnInit {
    @Input() weather: Weather;

    constructor() {}

    ngOnInit(): void {}

    public openWeatherInOtherTab() {
        window.open(`https://www.météo.fr/${stringToSlug(this.weather.city.name.toLowerCase())}`, '_blank');
    }
}
