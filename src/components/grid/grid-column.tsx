import { type FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import css from './grid.module.css';

interface GridColumnProps {
    width: number;
}

export const GridColumn: FC<PropsWithChildren<GridColumnProps>> = ({ width = 1, children }) =>
    (<div className={cn(css.column, css[`column-span-${width}`])}> {children} </div>)
