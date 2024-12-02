import { createAction , props } from "@ngrx/store";
import { Book } from "../models/book";

export const addBook = createAction('[book] Add Book', props<Book>());
export const addBookSuccess = createAction('[book] Added book successfully' , props<Book>());
export const addBookFailure = createAction('[book] Added book Failure' , props<{error:any}>());


export const removeBook = createAction('[book] Remove Book', props<{bookId:string}>())