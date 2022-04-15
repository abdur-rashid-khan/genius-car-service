import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link} from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../images/logo.png'
import './Navbar.css'




const Header = () => {
   const [user] = useAuthState(auth);
   const logout = () =>{
      signOut(auth)
      alert('logOut successfully')
   }
return (
   <div>
      <Navbar bg="primary" fixed='top' expand="lg">
      <Container>
         <Navbar.Brand href='home#home'>
            <img id="logo" className="img-fluid" src={logo} alt="Logo" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            >
            <Nav.Link href="home#home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#expert">Expert</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
               <NavDropdown.Item  as={Link}  to="/action3">Dropdown</NavDropdown.Item>
               <NavDropdown.Item  as={Link} to="/action4">
                  Another action
               </NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item as={Link} to="/action5">
                  Something else here
               </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form className="d-flex">
            <Nav.Link className="text-dark" as={Link} to="/about">About</Nav.Link>
            {
               user? 
               <button className="text-dark bg-primary border-0" as={Link} onClick={logout}>logout</button>
               :<Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>
            }
            </Form>
         </Navbar.Collapse>
      </Container>
      </Navbar>
   </div>
);
};

export default Header;
