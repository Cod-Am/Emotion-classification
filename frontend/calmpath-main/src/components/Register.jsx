import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./register.css"; // Include the styles here
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   document.body.style.zoom = "67%";
  // }, []);
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, phone, address, password }
      );
      if (res.data.success) {
        toast.success(res.data.message, {
          className: "custom-toast",
          duration: 4000,
        });
        // setTimeout(() => {
        //   navigate("/login");
        // }, 2000);
        navigate("/login");
      } else {
        if (password !== confirmPassword) {
          return toast.error("Password doesn't match", {
            className: "custom-toast",
            duration: 4000,
          });
        }
        return toast.error(res.data.message, {
          className: "custom-toast",
          duration: 4000,
        });
      }
    } catch (error) {
      console.log(error.response);
      return toast.error("Could'nt Process the request", {
        className: "custom-toast",
        duration: 4000,
      });
    }
  };
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
          {/* Title */}
          <h1 className="text-center display-4 calm-path-title mb-4">
            CALM-PATH
          </h1>
          <h2 className="text-center mb-4">Register</h2>
          {/* Form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Register
            </Button>
          </Form>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
