import { type FC } from 'react'
import { StarRating } from 'components/star-rating'

import css from './rating.module.css'

interface RatingProps {
    rating: number;
}

export const Rating: FC<RatingProps> = ({ rating }) => (
    <div className={css.container}>
        <span>Рейтинг</span>
        <hr className={css.separator} />
        <div className={css.box}>
            <StarRating rating={rating} />
            {Boolean(rating) && <span className={css.counter}>{Number.isInteger(rating) ? `${rating}.0` : rating}</span>}
        </div>

    </div >
)
