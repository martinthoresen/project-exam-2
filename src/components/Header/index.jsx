import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { CheckIfLoggedIn } from "../../utility/checkIfLoggedIn";
import LogoutPrompt from "./LogoutPrompt";

function Header() {
  let location = useLocation();
  let renderNavButton;
  let loggedInNav;
  let isLoggedIn = CheckIfLoggedIn();

  if (location.pathname === "/register") {
    renderNavButton = (
      <Link className="text-decoration-none text-primary btn px-4" to="/">
        Browse Venues
      </Link>
    );
  } else {
    renderNavButton = (
      <Link className="text-decoration-none text-primary btn px-4" to="/register">
        Register
      </Link>
    );
  }
  if (isLoggedIn) {
    loggedInNav = (
      <Nav className="ms-auto">
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/profile/bookings">Your Bookings</Nav.Link>
        <Nav.Link href="/profile/manage">Manage Venues</Nav.Link>
        {LogoutPrompt()}
      </Nav>
    );
  } else {
    loggedInNav = (
      <Nav className="d-flex flex-wrap ms-auto">
        {renderNavButton}
        <Link className="text-decoration-none btn btn-primary btn-rounded" to="/login">
          Log in
        </Link>
      </Nav>
    );
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="md" className="bg-body-white py-3 shadow">
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/holidaze_logo.png" alt="" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">{loggedInNav}</Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
