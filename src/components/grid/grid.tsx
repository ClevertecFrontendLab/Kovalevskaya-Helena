import { type FC, PropsWithChildren } from 'react';

import css from './grid.module.css'


export const Grid: FC<PropsWithChildren> = ({ children }) =>
    (<div className={css.container}>{children}</div>)
