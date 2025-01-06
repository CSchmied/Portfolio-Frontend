// LoginNavbarComponent.js
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "../style/Navbar.css"

const LoginNavbarComponent = ({ user, handleLogout, handleLogin }) => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="navbar" href="/">
          {/* <img
              alt=""
              src="/img/favicon-16x16.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
          Home
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LoginNavbarComponent;
