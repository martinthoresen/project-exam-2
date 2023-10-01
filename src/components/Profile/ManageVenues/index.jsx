import React, { useState } from "react";
import { Button, Card, Col, Container, Image, Nav, Navbar, Row, Stack } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faPlus } from "@fortawesome/free-solid-svg-icons";
import { format, parseISO, toDate } from "date-fns";
import { Link } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { loadKey } from "../../../storage/localStorage";
import { CheckIfLoggedIn } from "../../../utility/checkIfLoggedIn";
import ProfilePrompt from "../ProfilePrompt";
import baseUrl from "../../../utility/constants/baseUrl";

function formatDate(date) {
  return format(date, "yyyy/MM/dd");
}

function ManageVenues() {
  const isLoggedIn = CheckIfLoggedIn();
  if (!isLoggedIn) {
    window.location.replace("/unauthorized");
  }
  const userCreds = loadKey("data");
  const userName = userCreds["name"];
  const userData = useApi(baseUrl + `/holidaze/profiles/${userName}?_venues=true`);

  function RenderBookings() {
    const bookingData = userData;
    const bookingList = bookingData.data.venues;
    console.log(bookingList);
    if (bookingData.data._count?.venues === 0) {
      return (
        <div className="text-center my-5 h4 text-secondary">
          <p>You have no active Venues.</p>
          <Link to="/profile/manage/create" className="link-primary">
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Create new
          </Link>
        </div>
      );
    } else
      return (
        <Row className="my-3">
          {bookingList?.map((venue) => (
            <Col className="col-12 col-sm-6 col-lg-3" key={venue.id}>
              <a href={`/venue/?id=${venue.id}`} className="text-decoration-none">
                <Card className="border-0 shadow-sm mb-3 rounded">
                  <Card.Body>
                    <Card.Img variant="top" src={venue.media} className="rounded card-img" onError={(event) => (event.target.src = "/images/no-image.jpg")} />
                    <Card.Title>{venue.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-primary">
                      ${venue.price} <span className="text-muted small">/night</span>
                    </Card.Subtitle>
                    <div className="d-flex justify-content-between align-items-end">
                      <Button variant="outline-primary">View</Button>
                      <Card.Text className=" text-muted">
                        Rating: <span className="text-primary">{venue.rating}</span>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </a>
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
      return <Link className="btn btn-primary rounded-0 py-3 border-0 disabled">Your Venues</Link>;
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
              <Link className="btn btn-primary rounded-0 py-3 border-0" to="/profile">
                Your Bookings
              </Link>
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

export default ManageVenues;
