import { books,fullBook,menuList } from 'mocks';

import { Book,Category,FullBook } from './types';

const mockFetch = <T>(data: T): Promise<T> => new Promise((res) => {
    setTimeout(() => res(data), 500);
});

export const getCategories = async (): Promise<Category[]> => mockFetch(menuList);

export const getBooks = async (): Promise<Book[]> => mockFetch(books);

// export const getBookById = async (id: number): Promise<FullBook> => mockFetch(fullBook);

export const getBookById = async (id: number): Promise<FullBook> => fetch(`https://strapi.cleverland.by/api/books/${id}`).then(r => r.json())



