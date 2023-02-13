import { type FC } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames'
import { ReactComponent as ListIcon } from 'images/dehaze.svg'
import { ReactComponent as TileIcon } from 'images/tile.svg'
import { books } from 'mocks';

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

    return (<div className={css.container}>
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
            {books.map((book) => (
                <li key={book.id}>
                    <Link to={`/books/${book.category}/${book.id}`}>
                        <BookCard view={viewType} book={book} />
                    </Link>
                </li>
            ))}
        </ul>
    </div>)
}
