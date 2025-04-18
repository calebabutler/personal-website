import { ReactNode, useEffect } from "react";
import {
    Nav,
    Container,
    Navbar,
    Form,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { SetTransitionState, SetUseDarkMode, UseDarkMode } from "./App";

interface HeaderProps {
    setTransitionState: SetTransitionState;
    useDarkMode: UseDarkMode;
    setUseDarkMode: SetUseDarkMode;
}

const Header = ({
    setTransitionState,
    useDarkMode,
    setUseDarkMode,
}: HeaderProps): ReactNode => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    const navigateWithTransition = (path: string): void => {
        setTransitionState("fadeOut");
        setTimeout(() => {
            navigate(path);
            setTransitionState("fadeIn");
            setTimeout(() => setTransitionState(""), 125);
        }, 125);
    };

    return (
        <Navbar
            expand="lg"
            bg={useDarkMode ? "dark-subtle" : "light"}
            sticky="top"
        >
            <Container>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Button
                                onClick={() => setUseDarkMode(!useDarkMode)}
                                variant={useDarkMode ? "light" : "dark"}
                            >
                                {useDarkMode ? "Light Mode" : "Dark Mode"}
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className={"nav-theme-".concat(
                            useDarkMode ? "dark" : "light",
                        )}
                    >
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
