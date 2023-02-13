import { type FC } from 'react';
import cn from 'classnames'
import iconCross from 'images/cross.svg'
import iconSearch from 'images/search.svg'
import search from 'images/search_button.svg'

import css from './search.module.css'

interface SearchProps {
    onSearchStart: () => void;
    onSearchCancel: () => void;
    isVisible: boolean;
}

export const Search: FC<SearchProps> = ({ onSearchStart, onSearchCancel, isVisible }) => (
    <div className={css.container}>
        <div className={cn(css.button, { [css.hide]: isVisible })} onClick={onSearchStart} onKeyDown={onSearchStart} data-test-id='button-search-open' role="button" tabIndex={0}>
            <img src={search} alt='search' />
        </div>

        <div className={cn(css.search, { [css.show]: isVisible })} data-test-id='input-search'>
            <div className={cn(css.iconSearch, { [css.hide]: isVisible })}>
                <img src={iconSearch} alt='search' />
            </div>
            <input className={cn(css.input, { [css.isVisible]: isVisible })} type="text" placeholder="Поиск книги или автора…" />
            <div onClick={onSearchCancel} className={cn(css.iconCross, { [css.show]: isVisible })} onKeyDown={onSearchCancel} data-test-id='button-search-close' role='button' tabIndex={0}>
                <img src={iconCross} alt='cross' />
            </div>
        </div>
    </div>
);
