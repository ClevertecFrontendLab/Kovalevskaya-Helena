import React, { type FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';
import { ErrorAlert } from 'components/common/error';
import { Loader } from 'components/common/loader';
import { ReactComponent as ArrowIcon } from 'images/arrow_button.svg';
import { actionsCategories, selectorsCategories } from 'store/menu';
import type { AppDispatch } from 'store/store';

import css from './menu.module.css'

interface MenuProps {
    className?: string;
    testId?: string;
    testBooksId?: string;
    testTermsId?: string;
    testContractId?: string;
    onLinkClick?: () => void;
}

const shouldBeOpened = (path: string): boolean => path !== '/contract' && path !== '/terms'

export const Menu: FC<MenuProps> = ({ className, testId, testBooksId, testTermsId, testContractId, onLinkClick }) => {
    const { category } = useParams();
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(shouldBeOpened(pathname));
    const listRef = useRef<HTMLUListElement>(null);
    const [height, setHeight] = useState(0);

    const items = useSelector(selectorsCategories.getCategories);
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectorsCategories.getIsLoading);
    const error = useSelector(selectorsCategories.getIsError);
    const loaded = useSelector(selectorsCategories.getIsLoaded);

    useEffect(() => {
        dispatch(actionsCategories.getCategoriesThunk())
    }, [dispatch])

    useEffect(() => {
        setHeight((isMenuOpen && listRef.current) ? listRef.current.clientHeight : 0);
    }, [isMenuOpen, listRef, items]);

    useEffect(() => {
        setIsMenuOpen(shouldBeOpened(pathname));
    }, [pathname]);

    const onToggleButton = (e: Pick<React.MouseEvent, 'stopPropagation'>) => {
        e.stopPropagation();
        setIsMenuOpen((prevReview) => !prevReview);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'Enter') {
            onToggleButton(e);
        }
    }

    return (
        <React.Fragment>
            {loading && <Loader />}
            {error && <ErrorAlert />}
            {loaded &&
                <div className={cn(css.menu, className)}>
                    <div>
                        <div className={cn(css.allBooksLink, { [css.linkActiveUnderline]: isMenuOpen })} data-test-id={testId} onKeyDown={onKeyDown} onClick={onToggleButton} role="button" tabIndex={0}>
                            <div>Витрина книг</div>
                            <div className={cn(css.arrow, { [css.arrowOpen]: isMenuOpen })}>
                                <ArrowIcon className={cn({ [css.arrowActive]: isMenuOpen })} />
                            </div>
                        </div>
                        <div className={cn(css.navigation)} style={{ height }}>
                            <ul className={css.list} ref={listRef}>
                                <li className={css.item}>
                                    <Link onClick={onLinkClick} to="/" data-test-id={testBooksId} className={cn(css.link, { [css.linkActive]: pathname === '/' })}>Все книги</Link>
                                </li>
                                {items.map((item) =>
                                    <li className={css.item} key={item.id}>
                                        <Link onClick={onLinkClick} to={`/books/${item.path}`} className={cn(css.link, { [css.linkActive]: category === item.path })}>
                                            {item.name}<span className={css.count}>{item.count}</span>
                                        </Link>
                                    </li>)}
                            </ul>
                        </div>

                    </div>
                    <Link to='/terms' onClick={onLinkClick} data-test-id={testTermsId} className={cn(css.link, css.linkBold, { [css.linkActiveUnderline]: pathname === '/terms' })} >Правила пользования</Link>
                    <Link to='/contract' onClick={onLinkClick} data-test-id={testContractId} className={cn(css.link, css.linkBold, { [css.linkActiveUnderline]: pathname === '/contract' })}>Договор оферты</Link>
                </div>
            }

        </React.Fragment>
    );
}
