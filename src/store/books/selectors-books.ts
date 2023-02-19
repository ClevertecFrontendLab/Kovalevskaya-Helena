import type { Book } from 'api/types';
import type { RootStore } from 'store/store';

import { LoadStatuses } from '../../constants';

import type {State} from './slice-books'

export const getBooksSlice = (state:RootStore):State => state.books;

export const getLoadStatusesSlice = (state:RootStore):LoadStatuses => getBooksSlice(state).loadStatus;

export const getBooks = (state:RootStore):Book[] => getBooksSlice(state).books;

export const getIsLoading = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.LOADING;
export const getIsLoaded = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.LOADED;
export const getIsError = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.ERROR;
