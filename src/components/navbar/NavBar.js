import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/my-online-store-high-resolution-logo-black-transparent.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" className="p-1" fixed="top">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="auto"
          height="50"
          className="d-inline-block align-top"
          alt="Online Store logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-4">
          <Nav.Link onClick={() => navigate("/")} className="me-3">
            Home
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/products")} className="me-3">
            Products
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/about")} className="me-3">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
