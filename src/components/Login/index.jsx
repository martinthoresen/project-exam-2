import React from "react";
import { Form, Button } from "react-bootstrap";
import loginUser from "../../auth/loginUser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import baseUrl from "../../utility/constants/baseUrl";

const schema = yup
  .object({
    email: yup.string().required("Please enter your email."),
    password: yup.string().required("Please enter a password."),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    loginUser(baseUrl + "/holidaze/auth/login", data);
  }

  return (
    <div className="m-auto col-6 col-lg-3">
      <img src="/images/holidaze_logo.svg" alt="" className="mb-4" />
      <main>
        <h1 className="text-center">Log In</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" {...register("email")} />
            <p className="text-warning">{errors.email?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" {...register("password")} />
            <p className="text-warning">{errors.password?.message}</p>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Log in
          </Button>
          <p id="login-container"></p>
        </Form>
      </main>
    </div>
  );
}

export default Login;
