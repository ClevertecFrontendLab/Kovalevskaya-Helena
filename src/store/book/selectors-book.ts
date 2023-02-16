import type { FullBook } from 'api/types';
import type { RootStore } from 'store/store';

import { LoadStatuses } from '../../constants';

import type {State} from './slice-book'

export const getBookSlice = (state:RootStore):State => state.book;

export const getLoadStatusesSlice = (state:RootStore):LoadStatuses => getBookSlice(state).loadStatus;

export const getBook = (state:RootStore):FullBook | null => getBookSlice(state).book;

export const getIsLoading = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.LOADING;
export const getIsLoaded = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.LOADED;
export const getIsError = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.ERROR;
