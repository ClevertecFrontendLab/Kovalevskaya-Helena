import { type FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PageContainer } from 'components/common';
import { ErrorAlert } from 'components/common/error';
import { Loader } from 'components/common/loader';
import { BreadCrumb } from 'pages/book/breadcrumb';
import { actionsGetBook, selectorsBook } from 'store/book';
import type { AppDispatch } from 'store/store';

import { BookCard } from './book-card';
import { Description } from './description';
import { Rating } from './rating';
import { Reviews } from './reviews';


export const BookPage: FC = () => {
    const { bookId } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    const book = useSelector(selectorsBook.getBook);
    const loading = useSelector(selectorsBook.getIsLoading);
    const loaded = useSelector(selectorsBook.getIsLoaded);
    const error = useSelector(selectorsBook.getIsError);

    useEffect(() => {
        dispatch(actionsGetBook.getBookThunk((Number(bookId))));
    }, [bookId, dispatch]);

    if (!book) {
        return <h1>ЗагрузОчка</h1>;
    }

    return (
        <Fragment>
            <BreadCrumb />
            {loading && <Loader />}
            {error && <ErrorAlert />}
            {loaded &&
                <PageContainer>
                    <section className='book-page'>
                        <BookCard book={book} />
                        <Rating rating={book.rating} />
                        <Description book={book} />
                        <Reviews />
                    </section>
                </PageContainer>
            }
        </Fragment>
    )
};
