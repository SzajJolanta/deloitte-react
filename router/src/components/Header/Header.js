import Nav from "../Nav/Nav"
import { Div, HeaderWrapper, RoundDiv } from "./Header.styled"

const Header = () => {
    return (
        <HeaderWrapper justify="space-between">
            <Div/>
            <RoundDiv/>
            <Nav />
        </HeaderWrapper>
    )
}

export default Header;