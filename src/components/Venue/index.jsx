import React from "react";
import { useLocation } from "react-router-dom";
import useApi from "../../hooks/useApi";
import baseUrl from "../../utility/constants/baseUrl";
import { Col, Container, Row } from "react-bootstrap";
const useQuery = () => new URLSearchParams(useLocation().search);

function Venue() {
  let query = useQuery();
  const venueId = query.get("id");

  const { data, isLoading, isError } = useApi(baseUrl + `/holidaze/venues/${venueId}`);

  const venueData = data.data;
  return (
    <Container className="m-auto">
      <Col>
        <Row></Row>
      </Col>
    </Container>
  );
}

export default Venue;
