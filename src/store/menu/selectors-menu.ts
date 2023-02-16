import type { Category } from 'api/types';
import type { RootStore } from 'store/store';

import { LoadStatuses } from '../../constants';

import type {State} from './slice-menu'

export const getCategoriesSlice = (state:RootStore):State => state.menu;

export const getLoadStatusesSlice = (state:RootStore):LoadStatuses => getCategoriesSlice(state).loadStatus;

export const getCategories = (state:RootStore):Category[] => getCategoriesSlice(state).items;

export const getIsLoading = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.LOADING;
export const getIsLoaded = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.LOADED;
export const getIsError = (state:RootStore):boolean => getLoadStatusesSlice(state) === LoadStatuses.ERROR;


