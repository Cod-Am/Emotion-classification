import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./login.css";

const Login = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <Row className="w-100">
        <Col
          xs={12}
          md={6}
          lg={4}
          className="mx-auto bg-white p-4 shadow rounded"
        >
          <h1 className="text-center display-4 calm-path-title mb-4">
            CALM-PATH
          </h1>

          <h2 className="text-center mb-4">Login</h2>
          <Form className="signup-form">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
