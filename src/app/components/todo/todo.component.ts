import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    toDoList: Array<string> = [];

    constructor() {
    }

    ngOnInit() {
    }

    addToList(title: string) {
        this.toDoList.push(title);
    }

}
