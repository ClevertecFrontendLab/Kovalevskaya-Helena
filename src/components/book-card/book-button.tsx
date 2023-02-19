import { type FC } from 'react';
import { type Book } from 'api/types';
import cn from 'classnames'

import { convertDate } from './utils';

import css from './book-card.module.css';

interface BookProps {
    book: Pick<Book, 'booking'>;
    className?: string;
}

export const BookButton: FC<BookProps> = ({ book, className }) => {
    let label = '';

    if (book.booking?.dateOrder) {
        label = `Занята до ${convertDate(book.booking.dateOrder)}`
    } else if (book.booking) {
        label = 'Забронирована'
    } else {
        label = 'Забронировать'
    }

    return <button className={cn(css.button, { [css.isBooked]: book.booking, [css.isBookedUntil]: book.booking?.dateOrder }, className)} type='button'>{label}</button>
}
