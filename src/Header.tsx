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
import { useTranslation } from "react-i18next";

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
    const { t, i18n } = useTranslation();

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

    const NavbarButtons = ({ className }: { className: string }) => {
        return (
            <Form className={className}>
                <Row>
                    <Col xs="auto">
                        <Button
                            onClick={() =>
                                i18n.changeLanguage(
                                    i18n.language === "en" ? "es" : "en",
                                )
                            }
                            variant={useDarkMode ? "dark" : "light"}
                        >
                            {t("alternativeLanguage")}
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button
                            onClick={() => setUseDarkMode(!useDarkMode)}
                            variant={useDarkMode ? "light" : "dark"}
                        >
                            {useDarkMode
                                ? t("lightModeButton")
                                : t("darkModeButton")}
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    };

    return (
        <Navbar
            expand="lg"
            bg={useDarkMode ? "dark-subtle" : "light"}
            sticky="top"
        >
            <Container>
                <Navbar.Toggle />
                {/* Render here on small screens */}
                <NavbarButtons className="d-block d-lg-none" />
                <Navbar.Collapse>
                    <Nav
                        className={"nav-theme-".concat(
                            useDarkMode ? "dark" : "light",
                        )}
                    >
                        <Nav.Link
                            active={location.pathname === "/home"}
                            onClick={() => navigateWithTransition("/home")}
                        >
                            {t("homeTab")}
                        </Nav.Link>
                        <Nav.Link
                            active={location.pathname === "/projects"}
                            onClick={() => navigateWithTransition("/projects")}
                        >
                            {t("projectsTab")}
                        </Nav.Link>
                        <Nav.Link
                            active={location.pathname === "/guides"}
                            onClick={() => navigateWithTransition("/guides")}
                        >
                            {t("guidesTab")}
                        </Nav.Link>
                        <Nav.Link
                            active={location.pathname === "/about"}
                            onClick={() => navigateWithTransition("/about")}
                        >
                            {t("aboutTab")}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* Render here only on large screens */}
                <NavbarButtons className="d-none d-lg-block" />
            </Container>
        </Navbar>
    );
};

export default Header;
