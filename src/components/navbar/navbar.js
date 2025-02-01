import React from "react";
import { Navbar, Nav, Container, Offcanvas, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import logo from "../assests/logo.png";
import "../navbar/nav.css";

const NavigationBar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Sign-out error:", error.message);
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="navbar-logo" style={{ width: "40px", borderRadius: "20px" }} />
            <span className="navbar-title">Medi-Reminder</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Medi-Reminder</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/history">History</Nav.Link>
                <Nav.Link href="/medication">Medication</Nav.Link>
                <NavDropdown title="Profile" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* <Nav className="ms-auto gap-3 nav-links d-none d-lg-flex">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <Nav.Link href="/medication">Medication</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Profile" id="navbarDropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
