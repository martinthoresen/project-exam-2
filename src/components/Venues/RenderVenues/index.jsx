import React from "react";
import { Button, Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import useApi from "../../../hooks/useApi";
import baseUrl from "../../../utility/constants/baseUrl";

function RenderVenues() {
  let limit = 24;
  let offset = 0;
  const { data, isLoading, isError } = useApi(baseUrl + `/holidaze/venues?limit=${limit}&offset=${offset}`);

  const venues = data;

  if (isLoading) {
    return <Col></Col>;
  }

  if (isError) {
    return <div>There was en error loading the API.</div>;
  }

  return (
    <Container>
      <Row>
        {venues.map((venue) => (
          <Col className="col-12 col-sm-6 col-lg-3" key={venue.id}>
            <a href="/" className="text-decoration-none">
              <Card className="border-0 shadow-sm mb-3 rounded">
                <Card.Body>
                  <Card.Img variant="top" src={venue.media} className="rounded card-img" onError={(event) => (event.target.src = "/images/no-image.jpg")} />
                  <Card.Title>{venue.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-primary">
                    ${venue.price} <span className="text-muted small">/night</span>
                  </Card.Subtitle>
                  <div className="d-flex justify-content-between align-items-end">
                    <Button variant="outline-primary">View</Button>
                    <Card.Text className=" text-muted">
                      Rating: <span className="text-primary">{venue.rating}</span>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
      <Button onClick={showMorePages}>Load More...</Button>
    </Container>
  );
}

export default RenderVenues;
