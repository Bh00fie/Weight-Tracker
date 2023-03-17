import { NavLink } from "react-router-dom";

function Header(props) {
    return(
        <header>
        <h3>{props.title}</h3>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Weight Tracker</NavLink>
          <NavLink to="/contact">Calculator</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    )
}

export default Header;