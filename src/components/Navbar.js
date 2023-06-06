import React from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Appbar() {
    return (
        <Container className='position-fixed top-0 start-0 end-0'>
            <Navbar expand='md' id="Navbar">
                <Navbar.Brand href="#">
                    <img className='Logo' src='./PortfolioLogo.png' alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end"
                >
                    <Offcanvas.Body>
                        <Nav className="Links justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#AboutMe">About Me</Nav.Link>
                            <Nav.Link href="#Projects">Projects</Nav.Link>
                            <Nav.Link href="/Abdul Resume.pdf">Resume</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </Container>
    )
}
