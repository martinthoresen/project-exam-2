import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <Container className="m-auto">
      <Helmet title="Unauthorized | Holidaze" />
      <Col>
        <Row>
          <h1 className="text-center">Error</h1>
          <p className="text-center">You are not authorized to view this page.</p>
          <Link to="/register" className="text-center text-primary">
            Create an account
          </Link>
        </Row>
      </Col>
    </Container>
  );
}

export default Unauthorized;
