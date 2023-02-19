import { type FC, useEffect } from 'react';
import ReactDOM from 'react-dom'

import css from './loader.module.css'

export const Loader: FC = () => {
    useEffect(() => {
        document.body.classList.add(css.scroll);

        return () => {
            document.body.classList.remove(css.scroll);
        };
    })

    return ReactDOM.createPortal(<div className={css.wrapper} data-test-id='loader'>
        <span className={css.loader} />
    </div>, document.body);
}
