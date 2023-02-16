import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src="img/logo.png" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Poesia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Filosofia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Astrologia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
