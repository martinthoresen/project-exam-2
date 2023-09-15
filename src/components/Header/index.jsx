import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Stack } from "react-bootstrap";

function Header() {
  return (
    <header className="">
      <Navbar bg="light" className="py-3 shadow" variant="light">
        <Stack direction="horizontal" className="mx-auto col-10 justify-content-between">
          <Navbar.Brand>
            <Link to="/">
              <img src={"/public/images/holidaze_logo.svg"} alt="" className="" />
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link className="text-decoration-none text-primary btn px-4" to="/register">
              Register
            </Link>
            <Link className="text-decoration-none text-dark btn btn-primary btn-rounded" to="/login">
              Log in
            </Link>
          </Nav>
        </Stack>
      </Navbar>
    </header>
  );
}
export default Header;
