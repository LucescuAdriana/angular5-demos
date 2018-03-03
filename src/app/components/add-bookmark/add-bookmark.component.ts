import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-add-bookmark',
    templateUrl: './add-bookmark.component.html',
    styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {

    form: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            // 'title': ['Test'],
            // 'link': ['google.com']
        });
    }

    ngOnInit() {
    }

    addBookmark(data) {
        console.log(data);
    }


}
