import React from "react";
import { Button, Col, Container, Form, InputGroup, Row, Stack } from "react-bootstrap";

function VenueFilters() {
  return (
    <Row>
      <Form>
        <InputGroup as={Col} md="Row">
          <Form.Control placeholder="Ex. Condo, Beach" aria-label="Search Venues" />
          <Button variant="outline-secondary" id="button-search">
            Search
          </Button>
        </InputGroup>
        <Form.Group className="mb-3" as={Col}>
          <Form.Label>Guests:</Form.Label>
          <Form.Control type="number" min={1} />
        </Form.Group>
        <Form.Group className="mb-3" as={Col}>
          <Form.Label>Guests:</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group as={Col} className="d-flex m-auto ">
          <Form.Check type="switch" id="pets-switch" label="Pets" />
          <Form.Check type="switch" id="wifi-switch" label="Wifi" />
          <Form.Check type="switch" id="parking-switch" label="Parking" />
          <Form.Check type="switch" id="breakfast-switch" label="Breakfast" />
        </Form.Group>
      </Form>
    </Row>
  );
}

export default VenueFilters;
