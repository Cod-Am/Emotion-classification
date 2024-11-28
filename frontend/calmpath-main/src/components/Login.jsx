import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./login.css";
import toast from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CreateAuth } from "../Context/Authcontext";
import axios from "axios";
import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookJournalWhills } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = CreateAuth();
  const location = useLocation();
  useEffect(() => {
    document.body.style.zoom = "67%";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      console.log(`${process.env.REACT_APP_API}/api/v1/auth/login`);
      if (res && res.data.success) {
        toast.success(`${res.data.message}. Welcome ${res.data.user.name}`, {
          className: "custom-toast",
          duration: 4000,
        });
        setAuth({ ...auth, user: res.data.user, token: res.data.token });

        localStorage.setItem("auth", JSON.stringify(res.data));
        setTimeout(() => {
          navigate("/");
        }, 1000);
        // navigate("/");
      } else {
        toast.error(res.data.message);
        console.log(res.data);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Couldn't process the request";

      toast.error(errorMessage, {
        className: "custom-toast",
        duration: 4000,
      });
      // return toast.error("Could'nt Process the request", {
      //   className: "custom-toast",
      //   duration: 4000,
      // });
    }
  };
  return (
    <Layout>
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
            <Form
              className="signup-form shadow border border-light"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email} // Bind the input value to the state
                  onChange={(e) => SetEmail(e.target.value)} // Update state on change
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password} // Bind the input value to the state
                  onChange={(e) => setPassword(e.target.value)} // Update state on change
                />
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
    </Layout>
  );
};

export default Login;
