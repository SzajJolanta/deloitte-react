import React, { SyntheticEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const LoginForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleOnSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        
        console.log(values);
    }

    const handleOnChange = (name: string, value: string) => {
        setValues({ ...values, [name]: value });
    }
 
    return (
        <form onSubmit={handleOnSubmit}>
            <Input
                id="name"
                value={values.name}
                onChange={handleOnChange}
                inputType="text"
                placeholder="Podaj swój login" 
                required
            />
            <Input 
                id="email" 
                value={values.email}
                onChange={handleOnChange}
                inputType="email" 
                placeholder="Podaj email"  
                required  
            />
            <Input
                id="password"
                value={values.password}
                onChange={handleOnChange}
                inputType="password"
                placeholder="Wprowadź hasło"
                required
            />
            <Button buttonType="submit">Zaloguj się</Button>
        </form>
    )
}

export default LoginForm;
