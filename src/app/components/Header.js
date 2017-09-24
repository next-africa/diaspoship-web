import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="">
          <img src="../../img/slide.jpg)" alt="diaspo-ship-logo" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="">
          S'INSCRIRE
        </NavItem>
        <NavItem eventKey={2} href="">
          SE CONNECTER
        </NavItem>
        <NavItem eventKey={3} href="">
          COMMENT ÇA MARCHE?
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

var Header = function() {
  return <div>{navbarInstance}</div>;
};

export default Header;
