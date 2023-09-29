import React from "react";
import { Container } from "react-bootstrap";
import VenueFilters from "./VenueFilters";
import RenderVenues from "./RenderVenues";
import { Helmet } from "react-helmet";

function Venues() {
  return (
    <Container>
      <Helmet title="Home | Holidaze" />
      <main>
        <div fluid className="bg-secondary bg-gradient py-5 mb-5">
          <h1 className="text-white text-center">Browse Venues</h1>
        </div>
        <VenueFilters />
        <RenderVenues />
      </main>
    </Container>
  );
}

export default Venues;
