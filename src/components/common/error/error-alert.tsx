import { type FC, useState } from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import cross from 'images/cross-error.svg'
import dangerous from 'images/dangerous.svg'

import css from './error-alert.module.css'

export const ErrorAlert: FC = () => {

    const [closeError, setCloseError] = useState(false);

    const onCloseError = () => {
        setCloseError((prevState) => !prevState)
    }

    return ReactDOM.createPortal(<div className={cn(css.container, { [css.close]: closeError })}>
        <img src={dangerous} alt='dangerous' />
        <div className={css.text}>Что-то пошло не так. Обновите страницу через некоторое время.</div>
        <div onClick={onCloseError} onKeyDown={onCloseError} role='button' tabIndex={0}>
            <img src={cross} alt='cross' />
        </div>
    </div>, document.body)
}
