import { type FC } from 'react';
import cn from 'classnames'
import { type Book } from 'types';

import { convertDate } from './utils';

import css from './book-card.module.css';

interface BookProps {
    book: Book;
    className?: string;
}

export const BookButton: FC<BookProps> = ({ book, className }) => {
    let label = '';

    if (book.isReserved) {
        label = 'Забронирована'
    } else if (book.bookingData) {
        label = `Занята до ${convertDate(book.bookingData)}`
    } else {
        label = 'Забронировать'
    }

    return <button className={cn(css.button, { [css.isBooked]: book.isReserved }, { [css.isBookedUntil]: book.bookingData }, className)} type='button'>{label}</button>
}
