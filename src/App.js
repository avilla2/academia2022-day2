import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler
} from "reactstrap";
import logo from "./images/logo.jpeg";
import cover from "./images/cover.jpeg";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Navbar fixed="top" dark color="danger" expand="md">
        <NavbarBrand href="/">Academia Latina</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://inside.sou.edu/youth/latino/leadership.html">
                Academia Leadership
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://inside.sou.edu/youth/latino/junior-counselor.html">
                Junior Counselors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://inside.sou.edu/youth/latino/senior-counselor.html">
                Senior Counselors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://inside.sou.edu/youth/latino/head-resident-information.html">
                Head Residents
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        <img src={logo} className="logo" alt="Academia Logo" />
        <img src={cover} className="cover" alt="Academia Cover" />
      </div>
    </div>
  );
}
