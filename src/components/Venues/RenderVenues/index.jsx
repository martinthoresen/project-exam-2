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
            <Card className="border-0">
              <Card.Body>
                <Card.Img variant="top" src={venue.media} className="rounded card-img" onError={(event) => (event.target.src = "/images/no-image.jpg")} />
                <Card.Title>{venue.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{venue.price}</Card.Subtitle>
                <Card.Text>{venue.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RenderVenues;
