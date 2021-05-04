import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WEATHER_API_KEY } from 'src/constants';

export interface DayWeather {
    clouds: number;
    deg: number;
    dt: number;
    feels_like: {
        day: number;
        eve: number;
        morn: number;
        night: number;
    };
    gust: number;
    humidity: number;
    pop: number;
    pressure: number;
    rain: number;
    speed: number;
    sunrise: number;
    sunset: number;
    temp: {
        day: number;
        eve: number;
        max: number;
        min: number;
        morn: number;
        night: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    };
}

export interface Weather {
    city: {
        country: string;
        id: number;
        name: string;
        population: number;
        timezone: number;
        coord: {
            lon: number;
            lat: number;
        };
    };
    list: DayWeather[];
}

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    constructor(private _http: HttpClient) {}

    getWeatherForCity(citySearched: string) {
        return this._http
            .get(
                `https://api.openweathermap.org/data/2.5/forecast/daily?q=${citySearched}&cnt=14&units=metric&lang=fr&appid=${WEATHER_API_KEY}`
            )
            .pipe(
                map((result: any) => ({
                    city: result.city,
                    list: result.list.map((l) => ({
                        ...l,
                        weather: {
                            ...l.weather[0],
                            icon: `http://openweathermap.org/img/wn/${l.weather[0].icon}@2x.png`,
                        },
                    })),
                }))
            );
    }
}
