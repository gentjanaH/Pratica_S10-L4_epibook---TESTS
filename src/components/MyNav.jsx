import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../style/MyNav.css"


const MyNav = function () {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" className="border-bottom">
            <Container fluid >
                <Navbar.Brand href="start" className="fw-bold text-info custom-font">EPI-BOOKS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#footer">Browse</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;