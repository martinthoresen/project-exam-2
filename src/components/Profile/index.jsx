import React from "react";
import { Button, Card, CardImg, Col, Container, Nav, Navbar, Row, Stack } from "react-bootstrap";
import useApi from "../../hooks/useApi";
import baseUrl from "../../utility/constants/baseUrl";
import { loadKey } from "../../storage/localStorage";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { CheckIfLoggedIn } from "../../utility/checkIfLoggedIn";

function Profile() {
  const isLoggedIn = CheckIfLoggedIn();
  if (!isLoggedIn) {
    window.location.replace("/unauthorized");
  }
  const userCreds = loadKey("data");
  const userName = userCreds["name"];
  const userData = useApi(baseUrl + `/holidaze/profiles/${userName}`);
  let VenueManager;

  if (userData.data.venueManager) {
    VenueManager = (
      <p>
        <FontAwesomeIcon icon={faKey} className="me-2" />
        Venue Manager
      </p>
    );
  }

  return (
    <Container className="m-auto">
      <Helmet title="Profile | Holidaze" />
      <Row>
        <Col>
          <Card className="text-center border-0">
            <CardImg variant="top" src={userData.data.avatar} className="w-25 m-auto" alt="" srcset="" onError={(event) => (event.target.src = "/images/no-image.jpg")} />
            <div className="my-3 m-auto">
              <p>{userData.data.name}</p>
              <p className="bg-secondary text-white rounded p-1">{VenueManager}</p>
            </div>
          </Card>
        </Col>
        <Container className="bg-secondary">
          <hr className="" />
        </Container>
        <Navbar bg="light" className="shadow p-0" variant="light">
          <Stack direction="horizontal" className="me-auto ms-5">
            <Nav className="d-flex flex-wrap">
              <Button className="bg-secondary rounded-0 py-3 border-light">Your Venues</Button>
              <Button className="btn btn-secondary rounded-0 py-3 border-light">Your Bookings</Button>
            </Nav>
          </Stack>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Profile;
