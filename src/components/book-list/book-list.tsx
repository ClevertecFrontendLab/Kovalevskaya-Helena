import { type FC, Fragment } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames'
import { ErrorAlert } from 'components/common/error';
import { Loader } from 'components/common/loader';
import { ReactComponent as ListIcon } from 'images/dehaze.svg'
import { ReactComponent as TileIcon } from 'images/tile.svg'
import { actionGetBooks, selectorsBooks } from 'store/books';
import { selectorsCategories } from 'store/menu';
import type { AppDispatch } from 'store/store';

import { BookCard } from '../book-card';
import { IconButton } from '../common/icon-button/icon-button';
import { Dropdown } from '../dropdown';
import { Search } from '../search';

import css from './book-list.module.css'


const buttons = [
    { type: 'tile', Icon: TileIcon },
    { type: 'list', Icon: ListIcon },
] as const;

export const BookList: FC = () => {
    const [viewType, setViewType] = useState<'tile' | 'list'>('tile');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const books = useSelector(selectorsBooks.getBooks);
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectorsBooks.getIsLoading);
    const error = useSelector(selectorsBooks.getIsError);

    useEffect(() => {
        dispatch(actionGetBooks.getBooksThunk())
    }, [dispatch])

    const menu = useSelector(selectorsCategories.getCategories);

    return (
        <Fragment>
            {loading && <Loader />}
            {error && <ErrorAlert />}
            <div className={css.container}>
                <div className={css.header}>
                    <div className={css.box}>
                        <Search onSearchStart={() => setIsSearchVisible(true)} isVisible={isSearchVisible} onSearchCancel={() => setIsSearchVisible(false)} />
                        <Dropdown isSearchVisible={isSearchVisible} />
                    </div>
                    <div className={cn({ [css.buttons]: isSearchVisible })}>
                        {buttons.map(({ Icon, type }) =>
                            <IconButton data-test-id={type === 'list' ? 'button-menu-view-list' : 'button-menu-view-window'} key={type} type={viewType === type ? 'alert' : 'info'} onClick={() => setViewType(type)} Icon={Icon} />
                        )}
                    </div>
                </div>
                <ul className={css[viewType]}>
                    {books.map((book) => {
                        const categoryPath = menu.find(({ name }) => name.toLowerCase() === book.categories[0].toLowerCase())?.path;

                        return (
                            <li key={book.id}>
                                <Link to={`/books/${categoryPath}/${book.id}`}>
                                    <BookCard view={viewType} book={book} />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
}
