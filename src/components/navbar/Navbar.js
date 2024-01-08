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
          <Nav className="mr-auto nav-items-sty ms-auto text-light ">
            <Nav.Link href="#home" className='text-light'>About Us</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Projects</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown" className='text-white !important service-navbar' style={{color:"white"}}>
              <NavDropdown.Item href="#action/3.1 " className='collapse-navbar-items '>Villa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='collapse-navbar-items '>
                Apartments
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='collapse-navbar-items '>ReBuild</NavDropdown.Item>
            </NavDropdown>
            <Button variant="" onClick={handleSearchClick} className='align-self-start m-auto'>
              <FaSearch />
            </Button>
            {showSearch && (
              <div className="ml-2">
                <input type="text" placeholder="Search..." className='me-2 rounded border-0' />
                <Button className='align-items-center' style={{color:"white"}} >Search</Button>
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