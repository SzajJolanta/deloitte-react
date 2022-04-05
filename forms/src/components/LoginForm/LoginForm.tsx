import React, { SyntheticEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const LoginForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleOnSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        
        console.log(name, email, password);
    }
 
    return (
        <form onSubmit={handleOnSubmit}>
            <Input
                id="name"
                value={name}
                onChange={setName}
                inputType="text"
                placeholder="Podaj swój login" 
                required   
            />
            <Input 
                id="email" 
                value={email}
                onChange={setEmail}
                inputType="email" 
                placeholder="Podaj email"  
                required  
            />
            <Input
                id="password"
                value={password}
                onChange={setPassword}
                inputType="password"
                placeholder="Wprowadź hasło"
                required
            />
            <Button buttonType="submit">Zaloguj się</Button>
        </form>
    )
}

export default LoginForm;
