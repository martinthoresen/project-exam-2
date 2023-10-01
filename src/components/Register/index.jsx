import baseUrl from "../../utility/constants/baseUrl";
import registerUser from "../../auth/registerUser";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Helmet } from "react-helmet";
const NOROFF_REGEX = "noroff.no";

const schema = yup
  .object({
    name: yup.string().required("Please enter a username."),
    email: yup.string().email("Must be a valid Noroff email.").matches(NOROFF_REGEX, "Must be a valid Noroff email.").required("Please enter your email."),
    password: yup.string().min(8, "Must be 8 or more characters.").required("Please enter a password."),
    avatar: yup.string().url("Please enter a valid url"),
    venueManager: yup.boolean().default(false),
  })
  .required();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    registerUser(baseUrl + "/holidaze/auth/register", data);
  }
  return (
    <div className="m-auto col-6 col-lg-3 py-5">
      <Helmet title="Register | Holidaze" />
      <img src="/images/holidaze_logo.png" alt="" className="w-75 d-block m-auto mb-4" />
      <main>
        <h1 className="text-center">Register an Account</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control {...register("name")} />
            <p className="text-danger">{errors.name?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control {...register("email")} />
            <p className="text-danger">{errors.email?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control {...register("password")} />
            <p className="text-danger">{errors.password?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Avatar</Form.Label>
            <Form.Control {...register("avatar")} />
            <p className="text-danger">{errors.avatar?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check {...register("venueManager")} type="checkbox" label="Register as venue manager" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Register
          </Button>
          <div id="register-container"></div>
        </Form>
      </main>
    </div>
  );
}

export default Register;
