import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function RouteNotFound() {
  return (
    <Container>
      <Col>
        <Row>
          <h1 className="text-center">Error</h1>
          <p className="text-center">Oops... Could not find the page you're looking for.</p>
        </Row>
      </Col>
    </Container>
  );
}

export default RouteNotFound;
