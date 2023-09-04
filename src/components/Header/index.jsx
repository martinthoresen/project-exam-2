import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <header className="mb-5">
      <Navbar bg="light" className="py-3 shadow-sm" variant="light">
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="mx-1 text-decoration-none text-dark btn btn-primary" to="/login">
              Log in
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
