import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

    @Output() onAdd: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    addToDo(form) {
        this.save(form.title);
    }

    addToDo2(element: HTMLInputElement) {
        this.save(element.value);
    }

    save(title) {
        this.onAdd.emit(title);
    }

}
