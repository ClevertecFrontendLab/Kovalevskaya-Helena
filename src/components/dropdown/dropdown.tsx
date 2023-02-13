import { type FC } from 'react';
import cn from 'classnames'
import filter from 'images/filter_button.svg'
import sort from 'images/sort.svg'

import css from './dropdown.module.css'

export const Dropdown: FC<{ isSearchVisible: boolean }> = ({ isSearchVisible }) =>
    <div className={cn(css.container, { [css.hide]: isSearchVisible })}>
        <div className={css.dropdown}><img className={css.icon} src={sort} alt='filter' /> По рейтингу</div>
        <img className={css.filter} src={filter} alt='filter' />
    </div>

