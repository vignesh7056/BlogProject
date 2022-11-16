
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

  // console.log(localStorage.getItem("userName"));

  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  }

  const role= localStorage.getItem("userRole");
  console.log("header", role);
  return (
     (role==="admin") ?
     <>
    <Navbar bg="light" expand="lg">
      <Container style={style}>
        <Navbar.Brand href="#home" style={{ textAlign: "left" }}>ADMIN</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " style={{ alignSelf: "right" }}>
          <Nav className="ms-auto">
            <Nav.Link href={''}>{name}</Nav.Link>
            {/* <Nav.Link href={'/Signin'}>signin</Nav.Link> */}
            <NavDropdown title=""

              //   < img src="C:\Users\vigne\Desktop\profile1659415422417yoba0f.webp" alt="..." class="rounded">
              // </img>
              id="basic-nav-dropdown">
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
              <NavDropdown.Item href={'/clientpage'}>CLIENT BLOG</NavDropdown.Item>
              <NavDropdown.Item href={'/Blogfeed'}>PUBLIC FEED</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.clear()} href="/Signin"> signout</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>*/}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    :
    <>
    <Navbar bg="light" expand="lg">
      <Container style={style}>
        <Navbar.Brand href="#home" style={{ textAlign: "left" }}>BLOG</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " style={{ alignSelf: "right" }}>
          <Nav className="ms-auto">
            <Nav.Link href={''}>{name}</Nav.Link>
            {/* <Nav.Link href={'/Signin'}>signin</Nav.Link> */}
            <NavDropdown title=""

              //   < img src="C:\Users\vigne\Desktop\profile1659415422417yoba0f.webp" alt="..." class="rounded">
              // </img>
              id="basic-nav-dropdown">
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
              <NavDropdown.Item href={'/profilepage'}>myprofile</NavDropdown.Item>
              <NavDropdown.Item href={'/Blogfeed'}>Blogfeed</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.clear()} href="/Signin"> signout</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>*/}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Mynavbar;