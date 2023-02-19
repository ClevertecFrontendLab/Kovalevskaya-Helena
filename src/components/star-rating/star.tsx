import { type FC } from 'react';
import cn from 'classnames';
import { ReactComponent as StarIcon } from 'images/star.svg'

import css from './star.module.css';

export const Star: FC<{ active: boolean }> = ({ active }) => <StarIcon className={cn(css.star, { [css.starActive]: active })} />
