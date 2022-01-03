import React from 'react';
import { Button, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar
      className="px-4 navigation-bar-main "
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Navbar.Brand as={HashLink} to="/Home">
        <span className='brand-name'>Gardenia</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={HashLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={HashLink} to="/shop">
            Shops
          </Nav.Link>
          <Nav.Link as={HashLink} to="/shop">
            Offers
          </Nav.Link>
          <Nav.Link as={HashLink} to="/FQA">
            FQA
          </Nav.Link>
          <Nav.Link as={HashLink} to="/Contact">
            Contact
          </Nav.Link>
          {
            user.email && <Nav.Link as={HashLink} to="/dashboard">
            Dashboard
          </Nav.Link>
          }
        </Nav>
        <Nav className='ms-auto'>
          
          <Nav.Link as={HashLink} to="/Contact">
            {user.displayName}
          </Nav.Link>
          {
            user.email? <Button
                className=" nav-items-btn m-0 me-auto p-0 text-secondary "
                onClick={logOut}
                variant="button"
              >
                Logout
              </Button>: <Nav.Link as={HashLink} to="/Login">
              Login
            </Nav.Link>
         }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
 
export default Navigation;

