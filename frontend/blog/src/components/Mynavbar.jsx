import React, {useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useEffect } from "react";

function Mynavbar() {
  const [name, setName] = useState();
  useEffect(() => {
    setName(localStorage.getItem("userName")) 
  }, [])


  const userid = localStorage.getItem("userId");
  console.log("userid ",userid);
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  }

  const role= localStorage.getItem("userRole");
  console.log("header", role);
  return (
    <div>
        {role === "admin" ?  <>
    <Navbar bg="light" expand="lg">
      <Container style={style}>
        <Navbar.Brand href="#home" style={{ textAlign: "left" }}>ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " style={{ alignSelf: "right" }}>
          <Nav className="ms-auto">
            <Nav.Link href={''}>{name}</Nav.Link>
            <NavDropdown title=""
              id="basic-nav-dropdown">
              <NavDropdown.Item href={'/clientpage'}>CLIENT BLOG</NavDropdown.Item>
              <NavDropdown.Item href={'/Blogfeed'}>PUBLIC FEED</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.clear()} href="/Signin"> signout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </> : ""}
        {role === "user" ? <>
    <Navbar bg="light" expand="lg">
      <Container style={style}>
        <Navbar.Brand href="#home" style={{ textAlign: "left" }}>BLOG</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " style={{ alignSelf: "right" }}>
          <Nav className="ms-auto">
            <Nav.Link href={''}>{name}</Nav.Link>
            <NavDropdown title=""
              id="basic-nav-dropdown">
              <NavDropdown.Item href={'/profilepage'}>myprofile</NavDropdown.Item>
              <NavDropdown.Item href={'/Blogfeed'}>Blogfeed</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.clear()} href="/Signin"> signout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </> : ""}
        {!role ?
         <>
    <Navbar bg="light" expand="lg">
      <Container style={style}>
        <Navbar.Brand href="#home" style={{ textAlign: "left" }}>signin please</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " style={{ alignSelf: "right" }}>
          <Nav className="ms-auto">
            <Nav.Link href={''}>{name}</Nav.Link>
            <NavDropdown title=""
              id="basic-nav-dropdown">       
              <NavDropdown.Item href={'/Signin'}>signin</NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </> : ""}
    </div>
  );
}

export default Mynavbar;