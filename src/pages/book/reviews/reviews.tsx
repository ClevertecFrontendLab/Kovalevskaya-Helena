import { type FC, useRef, useState } from 'react';
import cn from 'classnames'
import { StarRating } from 'components/star-rating';
import arrowButton from 'images/arrow_button.svg'
import { reviews } from 'mocks';

import css from './reviews.module.css'

export const Reviews: FC = () => {
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
                    <span className={css.count}>{reviews.length}</span>
                </div>
                { /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
                <img data-test-id='button-hide-reviews' className={cn(css.arrow, { [css.arrowOpen]: open })} onKeyDown={onKeyDown} src={arrowButton} onClick={onToggleButton} alt='arrow button' role="button" tabIndex={0} />
            </div>

            <hr className={css.separator} />
            <div className={cn(css.list)} style={listStyles}>
                <ul ref={listRef}>
                    {reviews.map((item) => <li className={css.item} key={item.id}>
                        <div className={css.container}>
                            <div className={css.header}>
                                <div className={css.subheader}>
                                    <img src={item.avatar} alt='avatar' />
                                    <div className={css.info}>
                                        <span>{item.name} {item.surname}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <StarRating className={css.starRating} rating={item.rating} />
                            </div>
                            <div className={css.review}>
                                {item.review}
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
