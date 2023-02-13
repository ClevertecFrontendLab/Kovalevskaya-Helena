import { type FC } from 'react';
import { BookList } from 'components/book-list';
import { MainPageLayout } from 'components/layouts';

export const MainPage: FC = () => (
    <MainPageLayout>
        <BookList />
    </MainPageLayout>
);


