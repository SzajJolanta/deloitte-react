import React, { FC } from 'react';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ buttonType }) => {
    return (
        <button type={buttonType}></button>
    )
}

export default Button