import React from "react";
import { Col, Container, Nav, Navbar, Row, Stack } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <Row>
        <Col>
          <Container className="my-5 text-center">
            <img src="" alt="" srcset="" />
            <div>
              <p>USERNAME</p>
              <p>Venue Manager</p>
            </div>
          </Container>
          <Navbar bg="light" className="py-3 shadow" variant="light">
            <Stack direction="horizontal" className="mx-auto col-10 justify-content-between">
              <Nav className="d-flex flex-wrap">
                <button className="nav-button">Your Venues</button>
                <button className="nav-button">Your Bookings</button>
              </Nav>
            </Stack>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
