import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    @Output() searchClicked = new EventEmitter<string>();

    public citySearched = '';

    constructor() {}

    ngOnInit(): void {}

    public search() {
        this.searchClicked.emit(this.citySearched);
    }
}
