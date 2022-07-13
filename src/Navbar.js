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

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" dark color="primary" expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/page1">Page 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/page2">Page 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/page3">Page 3</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
