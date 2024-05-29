import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Home = () => {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedLoggedIn = localStorage.getItem("loggedIn");

    if (storedLoggedIn === "true" && storedName) {
      setName(storedName);
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (name.trim()) {
      setLoggedIn(true);
      localStorage.setItem("name", name);
      localStorage.setItem("loggedIn", "true");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setName("");
    localStorage.removeItem("name");
    localStorage.removeItem("loggedIn");
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-center mb-3">
        <Col md={4}>
          {!loggedIn ? (
            <Form className="mt-5">
              <Form.Group controlId="formName">
                <h4 className="text-center mb-3">Login</h4>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleLogin}
                className="mt-3 w-100 text-center"
              >
                Login
              </Button>
            </Form>
          ) : (
            <div className="mt-5">
              <h1 className="text-center mb-1">
                Welcome {capitalizeFirstLetter(name)}!
              </h1>
              <Button
                variant="secondary"
                onClick={handleLogout}
                className="mt-3 w-100 text-center"
              >
                Logout
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
