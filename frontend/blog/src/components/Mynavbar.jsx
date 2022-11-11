import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


function Mynavbar() {
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container style={style}>
        <Navbar.Brand href="#home"  style={{textAlign: "left"}}>BLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " style={{alignSelf:"right"}}>
          <Nav className="ms-auto">
            <Nav.Link href={'/Signin'}>Home</Nav.Link>
            {/* <Nav.Link href={'/Signin'}>signin</Nav.Link> */}
            <NavDropdown title = 
        
        < img src="C:\Users\vigne\Desktop\profile1659415422417yoba0f.webp" alt="..." class="rounded">
      </img>
       id="basic-nav-dropdown">
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
              <NavDropdown.Item href={'/profilepage'}>myprofile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> signout</NavDropdown.Item>
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
  );
}

export default Mynavbar;