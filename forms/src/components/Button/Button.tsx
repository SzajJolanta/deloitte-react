import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ buttonType, children }) => {
    return (
        <button type={buttonType}>
            {children}
        </button>
    )
}

export default Button