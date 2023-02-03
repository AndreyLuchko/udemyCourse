
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './navigation.css'

function Navigation({src, color}) {
    return (
        <Navbar className='bg-transparent pt-4'>
            <Container className='px-5 align-items-end '>
                <Navbar.Brand href="#home" >
                    <img
                        alt="logo"
                        src={src}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="me-auto" >
                    <Nav.Link className={color} href="#home">Coffee house</Nav.Link>
                    <Nav.Link className={color} href="#coffee">Our coffee</Nav.Link>
                    <Nav.Link className={color} href="#link">For your pleasure</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;