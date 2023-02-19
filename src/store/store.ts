import {combineReducers,configureStore} from '@reduxjs/toolkit';

import { bookReducer } from './book';
import { booksReducer } from './books';
import { menuReducer } from './menu';

export const rootReducer = combineReducers ({
    menu: menuReducer,
    books: booksReducer,
    book: bookReducer
});


export const store = configureStore ({
    reducer: rootReducer
});

export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
