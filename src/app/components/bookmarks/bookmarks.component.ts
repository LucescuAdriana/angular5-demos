import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-bookmarks',
    templateUrl: './bookmarks.component.html',
    styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

    bookmarksList: Array<string> = [];

    constructor() {
    }

    ngOnInit() {
    }

    addBookmark(title) {
        this.bookmarksList.push(title);
    }

}
