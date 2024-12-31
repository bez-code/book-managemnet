import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook, addBookSuccess, addBookFailure } from "./book.action";
import { Book } from "../models/book";

export const initialstate: Book[] = [];

export const bookReducer = createReducer(
    initialstate,
    on(addBook, (state,) => { return state }),
    on(addBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(addBookFailure, (state, { error }) => {
        console.error(error);
        return state
    }),
    on(removeBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
)