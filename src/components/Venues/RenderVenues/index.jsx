import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useApi from "../../../hooks/useApi";
import baseUrl from "../../../utility/constants/baseUrl";
import Spinner from "react-bootstrap/Spinner";

function RenderVenues(props) {
  const { data, isLoading, isError } = useApi(baseUrl + `/holidaze/venues`);
  const venues = data;
  const searchValue = props.searchValue;
  if (searchValue) {
    console.log(venues);
    const filteredVenues = venues.filter((venue) => venue.name.toLowerCase().includes(searchValue) || venue.location.country.toLowerCase().includes(searchValue));
    return (
      <Row>
        {filteredVenues.map((venue) => (
          <Col className="col-12 col-sm-6 col-lg-3" key={venue.id}>
            <a href={`/venue/?id=${venue.id}`} className="text-decoration-none">
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
    );
  }

  if (isLoading) {
    return (
      <Row>
        <Col className="text-center vh-100 mt-5">
          <Spinner className="me-auto" animation="border" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      </Row>
    );
  }

  if (isError) {
    return <div>There was en error loading the API.</div>;
  }

  return (
    <Row>
      {venues.map((venue) => (
        <Col className="col-12 col-sm-6 col-lg-3" key={venue.id}>
          <a href={`/venue/?id=${venue.id}`} className="text-decoration-none">
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
  );
}

export default RenderVenues;
