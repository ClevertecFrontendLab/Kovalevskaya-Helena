/* eslint-disable no-param-reassign */
import { createAsyncThunk,createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBookById } from 'api';
import type { FullBook } from 'api/types';

import { LoadStatuses } from '../../constants';


const sliceName = 'book';

const getBookThunk = createAsyncThunk(sliceName, getBookById);

export interface State {
    book: FullBook | null;
    loadStatus:LoadStatuses
}

const initialState:State = {
    book:null,
    loadStatus:LoadStatuses.UNKNOWN,
}


export const {reducer} = createSlice({
    name:sliceName,
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getBookThunk.pending, (state) => {
            state.loadStatus = LoadStatuses.LOADING;
        });

        builder.addCase(getBookThunk.rejected, (state) => {
            state.loadStatus = LoadStatuses.ERROR;
            state.book = null;
        });

        builder.addCase(getBookThunk.fulfilled, (state, action: PayloadAction<FullBook>) => {
            state.loadStatus = LoadStatuses.LOADED;
            state.book = action.payload;
        });
    },
})


export const actions ={
    getBookThunk
}
