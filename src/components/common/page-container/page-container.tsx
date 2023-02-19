import { type FC, type PropsWithChildren, createElement } from 'react';
import cn from 'classnames';

import css from './page-container.module.css'

interface PageContainerProps {
    as?: string;
    className?: string;
}

export const PageContainer: FC<PropsWithChildren<PageContainerProps>> = ({ children, as = 'main', className }) =>
    createElement(as, { className: cn(css.container, className) }, children);
