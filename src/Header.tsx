import { ReactNode } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

const Header = (): ReactNode => {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light">
            <Container>
                <br />
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#guides">Guides</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
