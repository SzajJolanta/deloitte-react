import { useState } from "react";
import Button from "../ButtonJS/Button";
import Input from "../InputJS/Input";

const LoginForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    }

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Wpisz imię"
                value={values.name}
                handleChange={handleChange}
                required
            />
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Wpisz email"
                value={values.email}
                handleChange={handleChange}
                required
            />
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Wpisz hasło"
                value={values.password}
                handleChange={handleChange}
                required
            />
            <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Wpisz wiadomość"
                value={values.message}
                handleChange={handleChange}
                required
            />
            <Button buttonType="submit">Zaloguj się</Button>
        </form>
    )
}

export default LoginForm;