import { type FC } from 'react';
import { type FullBook } from 'api/types';
import { BookButton } from 'components/book-card/book-button';

import { Slider } from '../swiper/swiper';

import css from './book-card.module.css'

import 'swiper/css';
import 'swiper/css/pagination';

interface BookCardProps {
    book: FullBook;
}

export const BookCard: FC<BookCardProps> = ({ book }) =>

(<div className={css.wrapper}>
    <div className={css.image}>
        <Slider images={book.images} />
    </div>
    <div className={css.book}>

        <h3 className={css.label}>{book.title}</h3>
        <h4 className={css.author}>
            <div>{book.authors.join(', ')}, {book.issueYear}</div>
        </h4>
        <BookButton className={css.button} book={book} />
    </div>
    <div className={css.description}>
        <h3 className={css.about}>О книге</h3>
        <div className={css.text}>
            {book.description.split('\n').map((paragraph) => <p key={paragraph} className={css.paragraph}>{paragraph}</p>)}
        </div>
    </div>
</div>
)

