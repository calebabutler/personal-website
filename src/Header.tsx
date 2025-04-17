import { ReactNode } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { SetTransitionState } from "./App";

interface HeaderProps {
    setTransitionState: SetTransitionState;
}

const Header = ({ setTransitionState }: HeaderProps): ReactNode => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateWithTransition = (path: string): void => {
        setTransitionState("fadeOut");
        setTimeout(() => {
            navigate(path);
            setTransitionState("fadeIn");
            setTimeout(() => setTransitionState(""), 250);
        }, 250);
    };

    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light" sticky="top">
            <Container>
                <br />
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link
                            active={location.pathname === "/home"}
                            onClick={() => navigateWithTransition("/home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            active={location.pathname === "/projects"}
                            onClick={() => navigateWithTransition("/projects")}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            active={location.pathname === "/guides"}
                            onClick={() => navigateWithTransition("/guides")}
                        >
                            Guides
                        </Nav.Link>
                        <Nav.Link
                            active={location.pathname === "/about"}
                            onClick={() => navigateWithTransition("/about")}
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
