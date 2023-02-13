import React, { type FC } from 'react';
import cn from 'classnames'

import css from './icon-button.module.css'

interface IconButtonProps {
    Icon: React.FC<{ role: string; className: string; onClick: IconButtonProps['onClick'] }>;
    onClick: () => void;
    type?: 'info' | 'alert';
}

export const IconButton: FC<IconButtonProps> = ({ Icon, onClick, type = 'info', ...dataAttrs }) =>
    <Icon onClick={onClick} role="button" className={cn(css.button, { [css.buttonActive]: type === 'alert' })} {...dataAttrs} />;
