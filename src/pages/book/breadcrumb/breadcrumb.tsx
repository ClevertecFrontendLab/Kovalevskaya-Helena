import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectorsBook } from 'store/book';
import { selectorsCategories } from 'store/menu';

import css from './breadcrumb.module.css'


export const BreadCrumb: FC = () => {
    const book = useSelector(selectorsBook.getBook);
    const menu = useSelector(selectorsCategories.getCategories);
    const { category } = useParams();

    const categoryLabel = category === 'all' ? 'Все книги' : menu.find(({ path }) => path === category)?.name;

    return (
        <div className={css.container}>
            <div className={css.inner}>
                <ul className={css.breadcrumb}>
                    <li className={css.item}>{categoryLabel ?? ''}</li>
                    <li className={css.item}>{book?.title ?? ''}</li>
                </ul>
            </div>
        </div>
    )
}

