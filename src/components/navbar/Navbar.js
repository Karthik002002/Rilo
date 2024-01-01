import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'

const NavbarTop = () => {

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch)
  }
  return (
    <Navbar collapseOnSelect expand="md" className='bg-gradient'>
      <Container className='nav-bar-container rounded-2'>
        <Navbar.Brand className='nav-logo logo-rilo'>Rilo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav nav-items-sty justify-content-center">
          <Nav className="mr-auto nav-items-sty ms-auto ">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown ">
              <NavDropdown.Item href="#action/3.1 " className='collapse-navbar-items'>Villa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='collapse-navbar-items'>
                Apartments
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='collapse-navbar-items'>ReBuild</NavDropdown.Item>
            </NavDropdown>
            <Button variant="" onClick={handleSearchClick} className='align-self-start '>
              <FaSearch />
            </Button>
            {showSearch && (
              <div className="ml-2">
                <input type="text" placeholder="Search..." className='me-2 rounded border-0'/>
                <Button className='align-items-center ' >Search</Button>
              </div>
            
            )}
          </Nav>
          <div className='d-flex ms-auto me-2 sign-in-nav-bar '>
            <Nav.Link href="#deets">Sign In</Nav.Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarTop;