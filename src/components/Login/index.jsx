import React from "react";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="m-auto col-6 col-lg-3">
      <h1 className="text-center">Log In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Log in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
