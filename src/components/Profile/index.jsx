import React from "react";
import { Button, Col, Container, Image, Nav, Navbar, Row, Stack } from "react-bootstrap";
import useApi from "../../hooks/useApi";
import baseUrl from "../../utility/constants/baseUrl";
import { loadKey } from "../../storage/localStorage";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { CheckIfLoggedIn } from "../../utility/checkIfLoggedIn";
import ProfilePrompt from "./ProfilePrompt";

function Profile() {
  const isLoggedIn = CheckIfLoggedIn();
  if (!isLoggedIn) {
    window.location.replace("/unauthorized");
  }
  const userCreds = loadKey("data");
  const userName = userCreds["name"];
  const userData = useApi(baseUrl + `/holidaze/profiles/${userName}`);

  let venueManagerButton;

  function RenderBookings() {
    const bookingData = userData.data;
    console.log(bookingData);
    if (bookingData._count?.bookings === 0) {
      return <p className="text-center my-5 h4 text-secondary">You have no current bookings.</p>;
    } else {
      console.log();
    }
  }
  function VenueManagerBadge() {
    if (userData.data.venueManager) {
      venueManagerButton = <Button className="btn btn-primary rounded-0 py-3 border-0">Your Venues</Button>;
      return (
        <p className="bg-secondary text-white rounded p-1 d-inline-block">
          <FontAwesomeIcon icon={faKey} className="me-2" />
          Venue Manager
        </p>
      );
    }
  }

  return (
    <Container className="m-auto ">
      <ProfilePrompt />
      <Helmet title="Profile | Holidaze" />
      <Row>
        <Col className="text-center mt-3">
          <div className="d-flex flex-column col-6 col-sm-5 col-lg-3 m-auto">
            <Image roundedCircle fluid src={userData.data.avatar} alt="" onError={(event) => (event.target.src = "/images/no-image.jpg")} />
          </div>

          <h2 className="my-2">{userData.data.name}</h2>
          <VenueManagerBadge />
        </Col>
      </Row>
      <Row>
        <Navbar className="shadow p-0 rounded" variant="light">
          <Stack direction="horizontal" className=" m-auto ms-md-5">
            <Nav className="d-flex flex-wrap">
              {venueManagerButton}
              <Button className="btn btn-primary rounded-0 py-3 border-0">Your Bookings</Button>
            </Nav>
          </Stack>
        </Navbar>
      </Row>
      <Row>
        <RenderBookings />
      </Row>
    </Container>
  );
}

export default Profile;
