import Nav from "../Nav/Nav"
import { Div, HeaderWrapper, RoundDiv } from "./Header.styled"

const Header = () => {
    return (
        <HeaderWrapper justify="space-between">
            <RoundDiv><div/></RoundDiv>
            <Nav />
        </HeaderWrapper>
    )
}

export default Header;