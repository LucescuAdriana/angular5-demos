import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-add-bookmark',
    templateUrl: './add-bookmark.component.html',
    styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {

    @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

    form: FormGroup;

    // constructor(formBuilder: FormBuilder) {
    constructor() {
        // this.form = formBuilder.group({
        //     'title': ['Test'],
        //     'link': ['google.com']
        // });
    }

    ngOnInit() {
    }

    addBookmark(form) {
        this.save(form.title);
    }

    save(title) {
        this.onClick.emit(title);
    }


}
