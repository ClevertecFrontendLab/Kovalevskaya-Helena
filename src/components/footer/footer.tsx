import { type FC } from 'react';
import facebook from 'images/facebook.svg'
import instagram from 'images/instagram.svg'
import linkedin from 'images/linkedin.svg'
import vk from 'images/vk.svg'

import css from './footer.module.css'


export const Footer: FC = () => (
    <div className={css.container}>
        <div className={css.line} />
        <div className={css.wrapper}>
            <div className={css.inner}>
                <span className={css.info}>© 2020-2023 Cleverland.</span>
                <span className={css.info}> Все права защищены.</span>
            </div>
            <ul className={css.social}>
                <li>
                    <a href='#'>
                        <img src={facebook} alt='facebook' />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={instagram} alt='facebook' />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img className={css.tt} src={vk} alt='facebook' />
                    </a>


                </li>
                <li>
                    <a href='#'>
                        <img src={linkedin} alt='facebook' />
                    </a>
                </li>
            </ul>
        </div>
    </div>)
