import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import VenueFilters from "./VenueFilters";
import RenderVenues from "./RenderVenues";

function Venues() {
  return (
    <div>
      <Container fluid className="bg-primary py-4">
        <Row>
          <Col className=" col-md-6 text-center m-auto text-white">
            <h2>Need a breath of fresh air?</h2>
            <p>We all do from time to time. Thats why our focus is channeled towards giving you the best experience as possible, either you’re looking for a relaxing beach holiday, or a city break.</p>
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
          <h1 className="text-white text-center">All Venues</h1>
        </Container>
        <Container>{VenueFilters()}</Container>
        {RenderVenues()}
      </main>
    </div>
  );
}

export default Venues;
