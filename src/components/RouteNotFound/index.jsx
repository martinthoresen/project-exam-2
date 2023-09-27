import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function RouteNotFound() {
  return (
    <Container className="m-auto">
      <Col>
        <Row>
          <h1 className="text-center">Error</h1>
          <p className="text-center">Oops... Could not find the page you're looking for.</p>
          <Link to="/" className="text-center text-primary">
            Return to Home
          </Link>
        </Row>
      </Col>
    </Container>
  );
}

export default RouteNotFound;
