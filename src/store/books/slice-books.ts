/* eslint-disable no-param-reassign */
import { createAsyncThunk,createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBooks } from 'api';
import type { Book } from 'api/types';

import { LoadStatuses } from '../../constants';


const sliceName = 'books';

const getBooksThunk = createAsyncThunk(sliceName,getBooks);

export interface State {
    books: Book[];
    loadStatus:LoadStatuses
}

const initialState:State = {
    books:[],
    loadStatus:LoadStatuses.UNKNOWN,
}


export const {reducer} = createSlice({
    name:sliceName,
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getBooksThunk.pending, (state) => {
            state.loadStatus = LoadStatuses.LOADING;
        });

        builder.addCase(getBooksThunk.rejected, (state) => {
            state.loadStatus = LoadStatuses.ERROR;
            state.books = [];
        });

        builder.addCase(getBooksThunk.fulfilled, (state, action: PayloadAction<Book[]>) => {
            state.loadStatus = LoadStatuses.LOADED;
            state.books = action.payload;
        });
    },
})


export const actions ={
    getBooksThunk
}
