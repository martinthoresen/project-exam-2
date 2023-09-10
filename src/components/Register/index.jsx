import React from "react";
import { Form, Button } from "react-bootstrap";

function Register() {
  return (
    <div className="m-auto col-6 col-lg-3">
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Must be at least 5 characters." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Must be a valid Noroff email." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Please enter a secure password." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Register as venue manager" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
