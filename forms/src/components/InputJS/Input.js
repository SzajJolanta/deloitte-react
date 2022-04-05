const Input = (props) => {
    const {
        placeholder,
        required,
        id,
        name,
        value,
        type,
        handleChange
    } = props;

    if (type === 'textarea') {
        return <textarea
        
        ></textarea>
    }

    return (
        <input 
            id={id}
            name={name}
            value={value}
            onChange={(e) => handleChange(name, e.target.value)}
            placeholder={placeholder}
            type={type}
            required={!!required}
        />
    )
}

export default Input;