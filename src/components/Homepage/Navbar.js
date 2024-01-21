import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../Context/ThemeContext";

const NavbarTop = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className={`bg-gradient ${darkMode ? "dark-mode" : ""}`}
      >
        <Container className="nav-bar-container rounded-2">
          <Navbar.Brand className="nav-logo logo-rilo">Rilo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav nav-items-sty justify-content-center">
            <Nav className="mr-auto nav-items-sty ms-auto text-light ">
              <Nav.Link href="#home" className="text-light">
                About Us
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Projects
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="collapsible-nav-dropdown"
                className="text-white !important service-navbar"
                style={{ color: "white" }}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="collapse-navbar-items "
                >
                  Villa
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="collapse-navbar-items "
                >
                  Apartments
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="collapse-navbar-items "
                >
                  ReBuild
                </NavDropdown.Item>
              </NavDropdown>
              {!showSearch && (
                <Button
                  variant=""
                  onClick={handleSearchClick}
                  className="align-self-start m-auto"
                >
                  <IoSearch />
                </Button>
              )}
              {showSearch && (
                <div className="d-flex ml-2 align-self-center navbar-search">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="me-2 rounded border-0 text-center w-50 "
                  />
                  <div>
                    <Button
                      variant=""
                      onClick={handleSearchClick}
                      className="align-self-start m-auto"
                    >
                      <IoSearch />
                    </Button>
                  </div>
                </div>
              )}
            </Nav>
            <div className="d-flex ms-auto me-2 align-items-center">
              <div
                onClick={toggleDarkMode}
                className="d-flex align-itms-center justify-content-center me-2"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </div>
              <div className="mb-1">
                <FaUserCircle />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;
