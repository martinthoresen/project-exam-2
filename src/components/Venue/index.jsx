import React from "react";
import { useLocation } from "react-router-dom";
import useApi from "../../hooks/useApi";
import baseUrl from "../../utility/constants/baseUrl";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import BookingCalendar from "./BookingCalendar";

function Venue() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const venueId = query.get("id");
  const endPoint = baseUrl + `/holidaze/venues/${venueId}?_owner=true&_bookings=true`;
  const { data, isLoading, isError } = useApi(endPoint);
  const venueData = data;
  let bookedDates = venueData.bookings;

  let bookedDatesFrom = bookedDates?.map((element) => new Date(element.dateFrom));
  let bookedDatesTo = bookedDates?.map((element) => new Date(element.dateTo));
  let disabledDates = bookedDatesFrom?.map((e, i) => [e, bookedDatesTo[i]]);
  const maxGuests = venueData.maxGuests;
  console.log(disabledDates);
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
              <a href="/">Back to Home</a>
            </Row>
          </Col>
        </main>
      </Container>
    );
  }
  return (
    <Container className="m-auto">
      <main>
        <Row className="col-9 m-auto">
          <a href="/" className="link-primary my-4">
            ...Back to Home
          </a>
          <Col className="col-12 mt-2">
            <h1 className="">{venueData.name}</h1>
            <p>
              Managed by <span className="text-primary">{venueData.owner?.name}</span>
            </p>
            <Image className="w-100 rounded mb-3" src={venueData.media} onError={(event) => (event.target.src = "/images/no-image.jpg")} />
          </Col>
          <Col className="">
            <BookingCalendar venueData={venueData} bookedDatesTo={bookedDatesTo} bookedDatesFrom={bookedDatesFrom} maxGuests={maxGuests} />
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default Venue;
