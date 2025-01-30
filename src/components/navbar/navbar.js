import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import logo from "../assests/logo.png";
import profile from "../assests/profile.jpg";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo} 
            alt="Logo"
            style={{
              width: '50px',
              height: '50px',
              marginRight: '10px',
              borderRadius:"30px" 
            }}
          />
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white',fontFamily:"cursive" }}>
            Medi-Reminder
          </span>
        </Navbar.Brand>

        <Nav className="ms-auto gap-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/history">History</Nav.Link>
          <Nav.Link href="/medication">Medication</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/profile">
            <Avatar src={profile} alt="Profile" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
