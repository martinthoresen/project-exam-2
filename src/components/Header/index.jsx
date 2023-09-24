import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Stack } from "react-bootstrap";
import { CheckIfLoggedIn } from "../../utility/checkIfLoggedIn";

function Header() {
  let location = useLocation();
  let renderNavButton;
  let loggedInNav;
  let isLoggedIn = CheckIfLoggedIn();
  if (isLoggedIn) {
    loggedInNav = (
      <Nav className="d-flex flex-wrap">
        <NavDropdown title="Menu" className="">
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Manage Venues</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Bookings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" className="text-danger">
            Log Out
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  } else {
    loggedInNav = (
      <Nav className="d-flex flex-wrap">
        {renderNavButton}
        <Link className="text-decoration-none text-dark btn btn-primary btn-rounded" to="/login">
          Log in
        </Link>
      </Nav>
    );
  }

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
  return (
    <header className="">
      <Navbar bg="light" className="py-3 shadow" variant="light">
        <Stack direction="horizontal" className="mx-auto col-10 justify-content-between">
          <Navbar.Brand href="/">
            <img src="/images/holidaze_logo.svg" alt="" className="navbar-logo" />
          </Navbar.Brand>
          {loggedInNav}
        </Stack>
      </Navbar>
    </header>
  );
}
export default Header;
