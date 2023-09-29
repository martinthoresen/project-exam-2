import React from "react";
import { Button, Col, Container, Image, Nav, Navbar, Row, Stack } from "react-bootstrap";
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
      <p className="bg-secondary text-white rounded p-1 d-inline-block">
        <FontAwesomeIcon icon={faKey} className="me-2" />
        Venue Manager
      </p>
    );
  }

  console.log(userData);
  return (
    <Container className="m-auto ">
      <Helmet title="Profile | Holidaze" />
      <Row>
        <Col className="text-center">
          <Image roundedCircle fluid src={userData.data.avatar} className="w-25 my-auto" alt="" srcset="" onError={(event) => (event.target.src = "/images/no-image.jpg")} />
          <p className="my-2">{userData.data.name}</p>
          {VenueManager}
        </Col>
      </Row>
      <Row>
        <Navbar className="shadow p-0 rounded" variant="light">
          <Stack direction="horizontal" className="me-auto ms-5">
            <Nav className="d-flex flex-wrap">
              <Button disabled className="btn btn-primary rounded-0 py-3 border-0">
                Your Venues
              </Button>
              <Button className="btn btn-primary rounded-0 py-3 border-0">Your Bookings</Button>
            </Nav>
          </Stack>
        </Navbar>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default Profile;
