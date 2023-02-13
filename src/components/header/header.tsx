import { type FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames'
import { Menu } from 'components/menu';
import logo from 'images/logo.svg'
import { user } from 'mocks';

import css from './header.module.css'


export const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const closeModalHandler = (e: MouseEvent) => {
            if (!isMenuOpen || !rootRef.current) {
                return;
            }

            if (!rootRef.current.contains(e.target as HTMLDivElement)) setIsMenuOpen(false);
        }

        document.body.addEventListener('click', closeModalHandler);

        return () => document.body.removeEventListener('click', closeModalHandler);
    }, [isMenuOpen]);

    const onClickMenu = (e: Pick<React.MouseEvent, 'stopPropagation'>) => {
        e.stopPropagation();
        setIsMenuOpen((prevState) => !prevState)
    }

    return (<div className={css.container}>
        <div className={css.wrapper}>
            <div className={css.burger} data-test-id='button-burger'>
                <div onClick={onClickMenu} onKeyDown={onClickMenu} className={css.iconBurger} role="button" tabIndex={0}>
                    <span className={cn(css.line, { [css.isVisible]: isMenuOpen })} />
                </div>
                <div ref={rootRef} className={cn(css.menuBurger, { [css.isActive]: isMenuOpen })} data-test-id='burger-navigation'>
                    <Menu onLinkClick={() => setIsMenuOpen(false)} className={css.menu} testId="burger-showcase" testBooksId='burger-books' testContractId='burger-contract' testTermsId='burger-terms' />
                    <div className={css.list}>
                        <div className={css.item}>Профиль</div>
                        <div className={css.item}>Выход</div>
                    </div>

                </div>
            </div>


            <Link to='/'>
                <img className={css.logo} src={logo} alt='logo' />
            </Link>

            <h1 className={css.title}>Библиотека</h1>
        </div>
        <div className={css.user}>
            <span className={css.name}> Привет, {user.name}!</span>
            <img src={user.avatar} alt='avatar' />
        </div>
    </div>)
}
