import { Component, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { Weather } from 'src/app/services/weather.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnChanges {
    @Input() weather: Weather;
    private _map: L.Map;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (
            changes.weather.currentValue &&
            changes.weather.previousValue &&
            changes.weather.currentValue.city.name !== changes.weather.previousValue.city.name
        ) {
            this._map.setView([this.weather.city.coord.lat, this.weather.city.coord.lon], 10);
        }
    }

    ngAfterViewInit(): void {
        this._initMap();
    }

    private _initMap(): void {
        this._map = L.map('map', {
            center: [this.weather.city.coord.lat, this.weather.city.coord.lon],
            zoom: 10,
        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 3,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        });

        tiles.addTo(this._map);
    }
}
