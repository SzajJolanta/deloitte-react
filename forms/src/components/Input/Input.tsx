import React, { FC } from 'react';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({ inputType, onChange, id, value, placeholder, required}) => (
    <input 
        id={id}
        type={inputType}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        required={!!required}
    />
)

export default Input;
