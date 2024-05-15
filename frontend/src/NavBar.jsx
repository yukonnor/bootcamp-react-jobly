import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

function NavBar() {
    return (
        <Navbar expand="md">
            <NavLink exact to="/" className="navbar-brand">
                Jobly
            </NavLink>

            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/signup">Signup</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/jobs">Jobs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/profile">Profile</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
