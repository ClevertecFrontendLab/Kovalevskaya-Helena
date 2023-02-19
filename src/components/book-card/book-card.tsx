import { type FC } from 'react';
import type { Book } from 'api/types';
import cn from 'classnames'
import Plug from 'images/noImage.png'

import { StarRating } from '../star-rating';

import { BookButton } from './book-button';

import css from './book-card.module.css';


interface BookCardProps {
    book: Book;
    view: 'list' | 'tile';
};


export const BookCard: FC<BookCardProps> = ({ book, view }) => (
    <div className={cn(css.wrapper, { [css.listWrapper]: view === 'list' })} data-test-id='card' >
        <img className={css.img} src={book.image ? `https://strapi.cleverland.by${book.image.url}` : Plug} alt={book.title} />
        <div className={css.description}>
            {view === 'tile' && <div className={css.star}><StarRating rating={book.rating} /></div>}
            <h3 className={css.label}>{book.title}</h3>
            <h4 className={css.author}>
                <div>{book.authors.join(', ')}, {book.issueYear}</div>
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
