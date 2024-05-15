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
                    <NavLink to="/snacks">Snacks</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/drinks">Drinks</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/new">Add Item</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavBar;
