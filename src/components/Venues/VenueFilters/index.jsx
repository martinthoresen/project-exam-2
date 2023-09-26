import React from "react";
import { Button, Form, InputGroup, Row } from "react-bootstrap";

function VenueFilters() {
  return (
    <Form>
      <Row>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Ex. Condo, Beach" aria-label="Search Venues" />
          <Button variant="outline-secondary" id="button-search">
            Search
          </Button>
        </InputGroup>
        <Form.Group className="mb-3">
          <Form.Label>Guests:</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Guests:</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Check type="switch" id="pets-switch" label="Pets" />
        </Form.Group>
      </Row>
    </Form>
  );
}

export default VenueFilters;
