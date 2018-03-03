import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BookmarksComponent} from './components/bookmarks/bookmarks.component';
import {AddBookmarkComponent} from './components/bookmarks/add-bookmark/add-bookmark.component';
import {BookmarkListComponent} from './components/bookmarks/bookmark-list/bookmark-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';


@NgModule({
    declarations: [
        AppComponent,
        BookmarksComponent,
        AddBookmarkComponent,
        BookmarkListComponent,
        TodoComponent,
        TodoAddComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
