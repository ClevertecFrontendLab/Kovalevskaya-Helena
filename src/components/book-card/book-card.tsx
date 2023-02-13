import { type FC } from 'react';
import cn from 'classnames'
import Plug from 'images/noImage.png'
import type { Book } from 'types';

import { StarRating } from '../star-rating';

import { BookButton } from './book-button';

import css from './book-card.module.css';


interface BookCardProps {
    book: Book;
    view: 'list' | 'tile';
};


export const BookCard: FC<BookCardProps> = ({ book, view }) => (
    <div className={cn(css.wrapper, { [css.listWrapper]: view === 'list' })} data-test-id='card' >
        <img className={css.img} src={book.img ?? Plug} alt={book.label} />
        <div className={css.description}>
            {view === 'tile' && <div className={css.star}><StarRating rating={book.rating} /></div>}
            <h3 className={css.label}>{book.label}</h3>
            <h4 className={css.author}>
                <div>{book.author.join(', ')}, {book.publishedYear}</div>
            </h4>
            <div className={css.box}>
                {view === 'list' && <div className={css.star}><StarRating rating={book.rating} /></div>}
                <div >
                    <BookButton className={css.button} book={book} />
                </div>
            </div>
        </div>
    </div>
)
