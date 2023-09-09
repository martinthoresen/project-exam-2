import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Venues() {
  return (
    <div>
      <Container fluid className="bg-primary py-4">
        <Row>
          <Col className=" col-md-6 mx-auto text-white">
            <h2>Need a breath of fresh air?</h2>
            <p>We all do from time to time. Thats why our focus is channeled towards giving you the best experience as possible, either you’re looking for a relaxing beach holiday, or a city break.</p>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center flex-column col-md-6 my-5">
        <h2>Curated Venues</h2>
        <Row>
          <Col md>
            <div className="card" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-primary py-4 my-5">
        <h1 className="text-white text-center">Browse All Venues</h1>
      </Container>
    </div>
  );
}

export default Venues;
