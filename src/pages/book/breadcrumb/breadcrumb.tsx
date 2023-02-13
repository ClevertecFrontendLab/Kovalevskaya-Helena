import { type FC } from 'react';
import { type Menu, Book } from 'types';

import css from './breadcrumb.module.css'


interface BreadCrumbProps {
    menuItem: Menu;
    book: Book;
}

export const BreadCrumb: FC<BreadCrumbProps> = ({ menuItem, book }) =>
    <div className={css.container}>
        <div className={css.inner}>
            <ul className={css.breadcrumb}>
                <li className={css.item}>{menuItem.label}</li>
                <li className={css.item}>{book.label}</li>
            </ul>
        </div>

    </div>

