import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VenueFilters from "./VenueFilters";
import RenderVenues from "./RenderVenues";
import { Helmet } from "react-helmet";

function Venues() {
  return (
    <main>
      <Helmet title="Home | Holidaze" />
      <Container fluid className="bg-secondary bg-gradient py-5 mb-5">
        <h1 className="text-white text-center">Browse Venues</h1>
      </Container>
      <Container>
        <VenueFilters />
      </Container>
      <RenderVenues />
    </main>
  );
}

export default Venues;
