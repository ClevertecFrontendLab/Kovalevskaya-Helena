/* eslint-disable no-param-reassign */
import { createAsyncThunk,createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from 'api';
import type { Category } from 'api/types';

import { LoadStatuses } from '../../constants';

const sliceName = 'menu';

const getCategoriesThunk = createAsyncThunk(sliceName, getCategories);

export interface State {
    items: Category[];
    loadStatus: LoadStatuses
}

const initialState: State = {
    items: [],
    loadStatus: LoadStatuses.UNKNOWN
}

export const { reducer}  = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoriesThunk.pending, (state) => {
            state.loadStatus = LoadStatuses.LOADING;
        });

        builder.addCase(getCategoriesThunk.rejected, (state) => {
            state.loadStatus = LoadStatuses.ERROR;
            state.items = [];
        });

        builder.addCase(getCategoriesThunk.fulfilled, (state, action: PayloadAction<Category[]>) => {
            state.loadStatus = LoadStatuses.LOADED;
            state.items = action.payload;
        });
    },
});

export const actions = {
    getCategoriesThunk
}
