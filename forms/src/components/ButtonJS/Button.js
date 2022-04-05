const Button = ({ buttonType, children }) => {
    return (
        <button type={buttonType}>{children}</button>
    )
}

export default Button;