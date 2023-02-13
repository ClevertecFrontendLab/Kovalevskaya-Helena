import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageContainer } from 'components/common';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { BookPage } from 'pages/book';
import { MainPage } from 'pages/main';
import { TermsPage } from 'pages/terms';

import css from './app.module.css';

export const App: FC = () => <div className={css.container}>
    <PageContainer as='header'>
        <Header />
    </PageContainer>
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/terms' element={<TermsPage content='terms' />} />
        <Route path='/contract' element={<TermsPage content='contract' />} />
        <Route path='books/:category' element={<MainPage />} />
        <Route path='books/:category/:bookId' element={<BookPage />} />
    </Routes>
    <PageContainer as='footer' className={css.footer}>
        <Footer />
    </PageContainer>
</div>
