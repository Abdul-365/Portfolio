import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../App.css';

const NavLinks = [
    {
        name: "About Me",
        href: "#AboutMe"
    },
    {
        name: "Projects",
        href: "#Projects"
    },
    {
        name: "Resume",
        href: "/Abdul Mannan Resume.pdf"
    }
]

export default function Appbar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='Navbar top-0 start-0 end-0'>
            <Navbar
                expand='md'
                id="Navbar"
                variant='dark'
                style={{
                    height: '5em',
                    backgroundColor: 'rgba(10, 0, 26, 0.8)',
                    backdropFilter: 'blur(10px)'
                }}
            >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img
                            src='./PortfolioLogo.png'
                            alt='Logo'
                            width="50rem"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle className='text-purple' onClick={handleShow} aria-controls='offcanvasNavbar' />
                    <Navbar.Offcanvas
                        show={show}
                        onHide={handleClose}
                        id='offcanvasNavbar'
                        className='bg-dark-purple'
                        aria-labelledby='offcanvasNavbarLabel'
                        placement="end"
                        scroll={true}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel'>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {NavLinks.map((link) => (
                                    <Nav.Link key={link.name} onClick={handleClose} href={link.href}>
                                        {link.name}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Container>
    )
}
