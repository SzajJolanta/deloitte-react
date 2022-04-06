import { NavLink } from "react-router-dom"
import "./Nav.css";

const Nav = () => {
    return <ul className="nav">
        <li>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/article/2' className="nav">Article 2</NavLink>
            <NavLink to='/postcode' className="nav">Random post code</NavLink>
        </li>
    </ul>
}

export default Nav;