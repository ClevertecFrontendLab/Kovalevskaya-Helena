import { type FC } from 'react'
import { type FullBook } from 'api/types';

import css from './description.module.css'



interface DescriptionProps {
    book: FullBook;
}

export const Description: FC<DescriptionProps> = ({ book }) => <div className={css.container}>
    <h3 className={css.title}>Подробная информация</h3>
    <hr className={css.separator} />
    <div className={css.inner}>
        <div className={css.left}>
            <div className={css.box}>
                <span className={css.subtitle}>Издательство</span>
                <span className={css.text}>{book.publish}</span>
            </div>
            <div className={css.box}>
                <span className={css.subtitle}>Год издания</span>
                <span className={css.text}>{book.issueYear}</span>
            </div>
            <div className={css.box}>
                <span className={css.subtitle}>Страниц</span>
                <span className={css.text}>{book.pages}</span>
            </div>
            <div className={css.box}>
                <span className={css.subtitle}>Переплёт</span>
                <span className={css.text}>{book.cover}</span>
            </div>
            <div className={css.box}>
                <span className={css.subtitle}>Формат</span>
                <span className={css.text}>{book.format}</span>
            </div>

        </div>
        <div className={css.right}>
            <div className={css.box}>
                <span className={css.subtitle}>Жанр</span>
                <span className={css.text}>{book.categories.join(', ')}</span>
            </div>
            <div className={css.box}>
                <span className={css.subtitle}>Вес</span>
                <span className={css.text}>{`${book.weight}г`}</span>
            </div>
            <div className={css.box}>
                <span className={css.subtitle}>ISBN</span>
                <span className={css.text}>{book.ISBN}</span>
            </div>
            <div className={css.box}>
                <span className={css.subtitle}>Изготовитель</span>
                <span className={css.text}>{book.producer}</span>
            </div>
        </div>
    </div>
</div>
