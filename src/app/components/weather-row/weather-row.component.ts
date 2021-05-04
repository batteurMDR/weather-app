import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DayWeather } from 'src/app/services/weather.service';

@Component({
    selector: '[app-weather-row]',
    templateUrl: './weather-row.component.html',
    styleUrls: ['./weather-row.component.scss'],
})
export class WeatherRowComponent implements OnInit {
    @Input() row: DayWeather;
    @Input() index: number;

    constructor() {}

    ngOnInit(): void {}

    public getFormatedDay(offset: number): string {
        return moment().add(offset, 'days').format('DD/MM/YYYY');
    }
}
