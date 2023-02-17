import axios from 'axios';

import { Book,Category,FullBook } from './types';

const host = 'https://strapi.cleverland.by';

const request = <T>(path:string, params?: Record<string, any>) => {
    const url = new URL(path, host);

    url.search = new URLSearchParams(params).toString();

    return axios.get<T>(url.toString()).then((response) => response.data);
}


export const getBooks = async (): Promise<Book[]> => request<Book[]>('/api/books').then((response) => response);
export const getCategories = async (): Promise<Category[]> => request<Category[]>('/api/categories').then((response) => response);
export const getBookById = async (id: number): Promise<FullBook> => request<FullBook>(`api/books/${id}`).then((response) => response);
