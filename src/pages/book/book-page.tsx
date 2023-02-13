import { type FC, Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageContainer } from 'components/common';
import { books, menuList } from 'mocks';
import { BreadCrumb } from 'pages/book/breadcrumb';

import { BookCard } from './book-card';
import { Description } from './description';
import { Rating } from './rating';
import { Reviews } from './reviews';


export const BookPage: FC = () => {
    const { bookId } = useParams();

    const navigate = useNavigate();

    const book = books.find(({ id }) => String(id) === bookId);

    useEffect(() => {
        if (!book) navigate('/');
    }, [book, navigate]);

    if (!book) {
        navigate('/');

        return null;
    }

    return (
        <Fragment>
            <BreadCrumb menuItem={menuList[1]} book={book} />
            <PageContainer>
                <section className='book-page'>
                    <BookCard book={book} />
                    <Rating rating={book.rating} />
                    <Description book={book} />
                    <Reviews />
                </section>
            </PageContainer>
        </Fragment>
    )
};
