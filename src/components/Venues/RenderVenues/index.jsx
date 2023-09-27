import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useApi from "../../../hooks/useApi";
import baseUrl from "../../../utility/constants/baseUrl";

function RenderVenues() {
  const { data, isLoading, isError } = useApi(baseUrl + "/holidaze/venues");
  const venues = data;
  console.log(venues);
  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return <div>There was en error loading the API.</div>;
  }
  return (
    <Container>
      <Row>
        {venues.map((venue) => (
          <Col className="col-12 col-sm-6 col-lg-3">
            <a href="/" className="text-decoration-none">
              <Card className="border-0 shadow-sm mb-3 rounded">
                <Card.Body>
                  <Card.Img variant="top" src={venue.media} className="rounded card-img" onError={(event) => (event.target.src = "/images/no-image.jpg")} />
                  <Card.Title>{venue.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-primary">
                    ${venue.price} <span className="text-muted small">/night</span>
                  </Card.Subtitle>
                  <Card.Text className="text-end text-muted">
                    Rating: <span className="text-primary">{venue.rating}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RenderVenues;
