import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import RenderVenues from "./RenderVenues";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";

function Venues() {
  const [searchValue, setSearchValue] = useState("");

  function scrollToResults() {
    const currentScroll = window.scrollY;
    window.scrollTo({
      top: currentScroll + 100,
      behavior: "smooth",
    });
  }

  function SearchButton() {
    if (searchValue === "") {
      return (
        <Button className="disabled btn btn-primary mt-2 w-100" onClick={scrollToResults} id="button-search">
          Search
        </Button>
      );
    } else
      return (
        <Button className=" btn btn-primary mt-2 w-100" onClick={scrollToResults} id="button-search">
          Search
        </Button>
      );
  }

  return (
    <Container>
      <Helmet title="Home | Holidaze" />
      <main>
        <div className="bg-secondary bg-gradient py-5">
          <h1 className="text-white text-center">Browse Venues</h1>
        </div>
        <Form className="col-12 my-2">
          <Form.Group>
            <Form.Label>Search:</Form.Label>
            <Form.Control placeholder="Ex. Spain, Beach" aria-label="Search Venues" onInput={(e) => setSearchValue(e.target.value.toLowerCase())} />
          </Form.Group>
          <SearchButton />
        </Form>
        <RenderVenues searchValue={searchValue} />
      </main>
    </Container>
  );
}

export default Venues;
