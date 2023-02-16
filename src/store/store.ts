import {combineReducers,configureStore} from '@reduxjs/toolkit';

import { booksReducer } from './books';
import { menuReducer } from './menu';
import { bookReducer } from './book';

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
