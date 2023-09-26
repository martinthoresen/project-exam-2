import React from "react";
import { Card, Container } from "react-bootstrap";
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
      {venues.map((venue) => (
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={venue.media} />
            <Card.Title>{venue.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{venue.price}</Card.Subtitle>
            <Card.Text>{venue.name}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default RenderVenues;
