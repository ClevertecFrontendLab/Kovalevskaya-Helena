import { type FC, useRef, useState } from 'react';
import { type Comments } from 'api/types';
import cn from 'classnames'
import { StarRating } from 'components/star-rating';
import arrowButton from 'images/arrow_button.svg'

import css from './reviews.module.css'

interface ReviewProps {
    comments: Comments[] | null;
}

export const Reviews: FC<ReviewProps> = ({ comments }) => {
    const [open, setOpen] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);

    const onToggleButton = () => {

        setOpen((prevReview) => !prevReview);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'Enter') {
            onToggleButton();
        }
    }

    const listStyles: React.CSSProperties = {};

    if (open && listRef.current) {
        listStyles.height = listRef.current.clientHeight;
    }

    return (
        <div className={css.wrapper}>
            <div className={css.header} >
                <div className={css.box}>
                    <span className={css.title}>Отзывы</span>
                    <span className={css.count}>{comments ? comments.length : 0}</span>
                </div>
                { /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
                <img data-test-id='button-hide-reviews' className={cn(css.arrow, { [css.arrowOpen]: open })} onKeyDown={onKeyDown} src={arrowButton} onClick={onToggleButton} alt='arrow button' role="button" tabIndex={0} />
            </div>

            <hr className={css.separator} />
            <div className={cn(css.list)} style={listStyles}>
                <ul ref={listRef}>
                    {comments && comments.map((comment) => <li className={css.item} key={comment.id}>
                        <div className={css.container}>
                            <div className={css.header}>
                                <div className={css.subheader}>
                                    <img src={comment.user.avatarUrl} alt='avatar' />
                                    <div className={css.info}>
                                        <span>{comment.user.firstName} {comment.user.lastName}</span>
                                        <span>{comment.createdAt}</span>
                                    </div>
                                </div>
                                <StarRating className={css.starRating} rating={comment.rating} />
                            </div>
                            <div className={css.review}>
                                {comment.text}
                            </div>
                        </div>
                    </li>
                    )}
                </ul>
            </div>
            <button className={css.button} data-test-id='button-rating' type="button">Оценить книгу</button>
        </div>
    )
}
