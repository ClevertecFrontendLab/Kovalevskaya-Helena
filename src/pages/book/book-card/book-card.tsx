import { type FC } from 'react';
import { BookButton } from 'components/book-card/book-button';
import { type Book } from 'types';

import { Slider } from '../swiper/swiper';

import css from './book-card.module.css'

import 'swiper/css';
import 'swiper/css/pagination';

interface BookCardProps {
    book: Book;
}



export const BookCard: FC<BookCardProps> = ({ book }) => (
    <div className={css.wrapper}>
        <div className={css.image}>
            <Slider images={book.images} />
        </div>
        <div className={css.book}>

            <h3 className={css.label}>{book.label}</h3>
            <h4 className={css.author}>
                <div>{book.author.join(', ')}, {book.publishedYear}</div>
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
