import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';



const NavigationBar = () => {
 
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Medi-Reminder</Navbar.Brand>
          <Nav className="ms-auto gap-3" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <Nav.Link href="/medication">Medication</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
            <Nav.Link href="/profile">
            <Avatar src="./components/assests/profile.jpg" alt=""/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>


    

  );
};

export default NavigationBar;
