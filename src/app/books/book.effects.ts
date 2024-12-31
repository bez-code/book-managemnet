import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects"
import { map, mergeMap, catchError, of } from "rxjs";
import { BookService } from "./book.service";
import * as bookActions from "./book.action"
@Injectable()

export class bookEffects {
    constructor(private actions$: Actions,
        private bookService: BookService) { }

    addBook$ = createEffect(() => this.actions$.pipe(
        ofType(bookActions.addBook),
        mergeMap((action) => this.bookService.addBook(action)
            .pipe(
                map((book) => bookActions.addBookSuccess(book)),
                catchError((error) => of(bookActions.addBookFailure(error)))
            ))
    ));

}