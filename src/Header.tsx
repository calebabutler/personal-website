import { ReactNode, useState } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

const Header = (): ReactNode => {
    const [selection, setSelection] = useState("home");
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light" sticky="top">
            <Container>
                <br />
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link
                            active={selection === "home"}
                            onClick={() => setSelection("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            active={selection === "projects"}
                            onClick={() => setSelection("projects")}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            active={selection === "guides"}
                            onClick={() => setSelection("guides")}
                        >
                            Guides
                        </Nav.Link>
                        <Nav.Link
                            active={selection === "about"}
                            onClick={() => setSelection("about")}
                        >
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
