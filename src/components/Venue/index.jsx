import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useApi from "../../hooks/useApi";
import baseUrl from "../../utility/constants/baseUrl";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import BookingCalendar from "./BookingCalendar";

function Venue() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const venueId = query.get("id");

  const { data, isLoading, isError } = useApi(baseUrl + `/holidaze/venues/${venueId}?_owner=true&_bookings=true`);
  const venueData = data;
  if (isLoading) {
    return (
      <Container className="m-auto">
        <main>
          <Col>
            <Row>
              <Spinner className="me-auto" animation="border" variant="primary">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Row>
          </Col>
        </main>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="m-auto">
        <main>
          <Col>
            <Row>
              <h1>Error</h1>
              <p>There was an error loading the API.</p>
            </Row>
          </Col>
        </main>
      </Container>
    );
  }

  return (
    <Container className="m-auto">
      <main>
        <Col className="col-12">
          <Row>
            <Image variant="fluid" className="h-25" src={venueData.media} />
          </Row>
          <Row>
            <h1 className="mb-3">{venueData.name}</h1>
            <p>
              Managed by <span className="text-primary">{venueData.owner?.name}</span>
            </p>
          </Row>
          <Row className="">
            <BookingCalendar />
          </Row>
        </Col>
      </main>
    </Container>
  );
}

export default Venue;
