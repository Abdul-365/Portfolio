import React from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Appbar() {
    return (
        <Container className='position-fixed top-0 start-0 end-0'>
            <Navbar expand='md' id="Navbar" variant='dark'>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src='./PortfolioLogo.png'
                            alt='Logo'
                            width="50rem"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar'
                        className='bg-dark'
                        aria-labelledby='offcanvasNavbarLabel'
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel'>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="Links justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#AboutMe">About Me</Nav.Link>
                                <Nav.Link href="#Projects">Projects</Nav.Link>
                                <Nav.Link href="/Abdul Resume.pdf">Resume</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Container>
    )
}
