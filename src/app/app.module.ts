import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BookmarksComponent} from './components/bookmarks/bookmarks.component';
import {AddBookmarkComponent} from './components/add-bookmark/add-bookmark.component';
import {BookmarkListComponent} from './components/bookmark-list/bookmark-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        BookmarksComponent,
        AddBookmarkComponent,
        BookmarkListComponent
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
