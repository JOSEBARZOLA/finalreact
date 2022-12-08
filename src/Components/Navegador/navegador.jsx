import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './navegador.css';


function NavBarExample() {
  return (

    <>
            <Navbar className="navBg"  expand="lg">
                <Container className='contenido'>
                    <h3 className='title'><span>IA Revestimientos</span></h3>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='links' as={Link} to="/" >Inicio</Nav.Link>
                            <Nav.Link className='links' as={Link} to="/Trabajos">Trabajos</Nav.Link>
                            <Nav.Link className='links' as={Link} to="/Contacto">Contacto</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
  )
}

export default NavBarExample