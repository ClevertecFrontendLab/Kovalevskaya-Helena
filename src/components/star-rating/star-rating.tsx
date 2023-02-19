import { type FC } from 'react';
import cn from 'classnames';

import { Star } from './star';

import css from './star.module.css'


interface StarRatingProps {
    rating: number | null;
    className?: string;
}

export const StarRating: FC<StarRatingProps> = ({ rating, className }) => {
    if (!rating) return <span>еще нет отзывов</span>;

    return (
        // eslint-disable-next-line react/no-array-index-key
        <div className={cn(css.starRating, className)}>{Array.from({ length: 5 }).map((_, idx) => <Star key={idx} active={idx + 1 <= rating} />)}</div>
    )
}
