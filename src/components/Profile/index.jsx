import React, { useState } from "react";
import { Button, Col, Container, Image, Nav, Navbar, Row, Stack } from "react-bootstrap";
import useApi from "../../hooks/useApi";
import baseUrl from "../../utility/constants/baseUrl";
import { loadKey } from "../../storage/localStorage";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { CheckIfLoggedIn } from "../../utility/checkIfLoggedIn";
import ProfilePrompt from "./ProfilePrompt";
import { format, parseISO, toDate } from "date-fns";
import { Link } from "react-router-dom";

function formatDate(date) {
  return format(date, "yyyy/MM/dd");
}

function Profile() {
  const isLoggedIn = CheckIfLoggedIn();
  if (!isLoggedIn) {
    window.location.replace("/unauthorized");
  }
  const userCreds = loadKey("data");
  const userName = userCreds["name"];
  const userData = useApi(baseUrl + `/holidaze/profiles/${userName}?_bookings=true`);
  let venueManagerButton;

  function RenderBookings() {
    const bookingData = userData;
    const bookingList = bookingData.data.bookings;
    if (bookingData._count?.bookings === 0) {
      return <p className="text-center my-5 h4 text-secondary">You have no current bookings.</p>;
    } else
      return (
        <Row>
          <h1 className="text-center bg-secondary py-2 text-white">Upcoming Bookings</h1>
          {bookingList?.map((booking) => (
            <Col className="my-3 col-12">
              <p className="rounded text-secondary p-1 text-center h5">
                {formatDate(parseISO(booking?.dateFrom))} to {formatDate(parseISO(booking?.dateTo))}
              </p>
            </Col>
          ))}
        </Row>
      );
  }
  function VenueManagerBadge() {
    if (userData.data.venueManager) {
      return (
        <p className="bg-secondary text-white rounded p-1 d-inline-block">
          <FontAwesomeIcon icon={faKey} className="me-2" />
          Venue Manager
        </p>
      );
    }
  }
  function VenueManagerButton() {
    if (userData.data.venueManager) {
      return (
        <Link className="btn btn-primary rounded-0 py-3 border-0" to="/profile/manage">
          Your Venues
        </Link>
      );
    } else return null;
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
              <VenueManagerButton />
              <Button className="btn btn-primary rounded-0 py-3 border-0 disabled">Your Bookings</Button>
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
