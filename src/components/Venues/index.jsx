import React from "react";
import baseUrl from "../../utility/constants/baseUrl";
import useApi from "../../hooks/useApi";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Venues() {
  const { data, isLoading, isError } = useApi(baseUrl + "/holidaze/venues");
  const venues = data;

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return <div>There was en error loading the API.</div>;
  }
  return (
    <div>
      <Container fluid className="bg-primary py-4">
        <Row>
          <Col className=" col-md-6 text-center m-auto text-white">
            <h2>Need a breath of fresh air?</h2>
            <p className="">We all do from time to time. Thats why our focus is channeled towards giving you the best experience as possible, either you’re looking for a relaxing beach holiday, or a city break.</p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center flex-column col-md-6 my-5">
        <h2>Curated Venues</h2>
        <Row>
          <Col md></Col>
        </Row>
      </Container>
      <main>
        <Container fluid className="bg-primary py-4 my-5">
          <h1 className="text-white text-center">Browse All Venues</h1>
        </Container>
        <Container>
          {venues.map((venue) => (
            <Col key={"venue_" + venue.id} className="col-12 col-sm-4 col-md-3 my-1">
              <div className="d-flex p-1">
                <Link to={"/venue/" + venue.id} className="text-decoration-none text-dark ">
                  <img src={venue.imageUrl} alt={venue.title} className="product-image"></img>
                  <h2>{venue.title}</h2>
                  <p className="text-secondary text-decoration-underline">View Venue</p>
                </Link>
              </div>
            </Col>
          ))}
        </Container>
      </main>
    </div>
  );
}

export default Venues;
