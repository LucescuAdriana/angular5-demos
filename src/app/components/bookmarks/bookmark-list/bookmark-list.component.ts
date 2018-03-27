import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-bookmark-list',
    templateUrl: './bookmark-list.component.html',
    styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

    @Input() bookmarks: Array<string>;

    constructor() {
    }

    ngOnInit() {
    }

}
