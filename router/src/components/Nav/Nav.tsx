import { NavLink, Link } from "react-router-dom"
import "./Nav.css";

const Nav = () => {
    return <ul>
        <li>
            <NavLink to='/' className={(isActive) => isActive ? 'active' : 'not'}>Home</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/article/2' className="nav">Article 2</NavLink>
        </li>
    </ul>
}

export default Nav;