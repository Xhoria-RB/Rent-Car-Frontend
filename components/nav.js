import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Container
} from 'reactstrap';
import NavItems from './NavItems';
import { navItems } from '../utils/constants';

const nav = () => {
  const [isOpen, toggle] = useState(false);
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">Rent-Car</NavbarBrand>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                {navItems[0].map((item) => (
                  <NavItems key={item.title} title={item.title} url={item.url} />
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
                {navItems[1].map((item) => (
                  <NavItems key={item.title} title={item.title} url={item.url} />
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About us
              </DropdownToggle>
              <DropdownMenu right>
                {navItems[2].map((item) => (
                  <NavItems key={item.title} title={item.title} url={item.url} />
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/report">Reports</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signin">Sign In</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
export default nav;
