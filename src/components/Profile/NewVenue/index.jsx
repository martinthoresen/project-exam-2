import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Helmet } from "react-helmet";
import postApi from "../../../post/postApi";
import baseUrl from "../../../utility/constants/baseUrl";

const schema = yup
  .object({
    name: yup.string().required("Please enter a name."),
    description: yup.string().required("Please enter a description."),
    media: yup.string().url("Please enter a valid url"),
    price: yup.number().required("Please enter a price."),
    maxGuests: yup.number().required("Please enter max amount of guests."),
    rating: yup.number("Please enter a rating."),
  })
  .required();

function NewVenue() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const createContainer = document.querySelector("#create-container");
    postApi(baseUrl + "/holidaze/venues", data, createContainer);
  }
  return (
    <div className="m-auto col-6 col-lg-3 py-5">
      <Helmet title="Create Venue | Holidaze" />
      <main>
        <h1 className="text-center">Create a new Venue</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Venue Name</Form.Label>
            <Form.Control {...register("name")} />
            <p className="text-danger">{errors.name?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control {...register("description")} />
            <p className="text-danger">{errors.description?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Media</Form.Label>
            <Form.Control {...register("media")} />
            <p className="text-danger">{errors.media?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" {...register("price")} />
            <p className="text-danger">{errors.price?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Max Guests</Form.Label>
            <Form.Control type="number" {...register("maxGuests")} />
            <p className="text-danger">{errors.maxGuests?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" {...register("rating")} />
            <p className="text-danger">{errors.rating?.message}</p>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
          <div id="create-container"></div>
        </Form>
      </main>
    </div>
  );
}

export default NewVenue;
