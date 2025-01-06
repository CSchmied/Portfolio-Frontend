// NavbarComponent.js
import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import "../style/Navbar.css"

const NavbarComponent = ({ user, handleLogout, handleLogin }) => {
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
          />{" "} */}
          Carlton Schmieder
        </Navbar.Brand>
          <Navbar.Text >
            {user ? (
              <div>
                Hello,  <span>{user.name} </span>
                <Button onClick={handleLogout} size="sm">
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={handleLogin} size="sm">
                Login
              </Button>
            )}
          </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
