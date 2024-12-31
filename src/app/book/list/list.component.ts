import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { addBook, removeBook } from 'src/app/books/book.action';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  books: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books = store.pipe(select('book'));
   }

 

  AddBook(id: string, title: string, author: string) {
    this.store.dispatch(addBook({ id, title, author }))
  }

  RemoveBook(bookId: string) {
    this.store.dispatch(removeBook({ bookId }))
  }

}
