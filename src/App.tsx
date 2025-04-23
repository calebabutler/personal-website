import { ReactNode, useLayoutEffect, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InfoCard from "./InfoCard";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import { Navigate, Route, Routes } from "react-router";

import EnHome from "./en-pages/Home";
import EnProjects from "./en-pages/Projects";
import EnGuides from "./en-pages/Guides";
import EnAbout from "./en-pages/About";

import EsHome from "./es-pages/Home";
import EsProjects from "./es-pages/Projects";
import EsGuides from "./es-pages/Guides";
import EsAbout from "./es-pages/About";
import { useTranslation } from "react-i18next";

export type TransitionState = "fadeIn" | "fadeOut" | "";
export type SetTransitionState = React.Dispatch<
    React.SetStateAction<TransitionState>
>;

export type UseDarkMode = boolean;
export type SetUseDarkMode = React.Dispatch<React.SetStateAction<boolean>>;

const App = (): ReactNode => {
    const [transitionState, setTransitionState]: [
        TransitionState,
        SetTransitionState,
    ] = useState("" as TransitionState);

    const [useDarkMode, setUseDarkMode]: [UseDarkMode, SetUseDarkMode] =
        useState(false);

    const { i18n } = useTranslation();

    // Set dark theme based on system theme
    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setUseDarkMode(true);
        }
    }, []);

    return (
        <div
            className={"min-vh-100 d-flex flex-column bg-body ".concat(
                useDarkMode ? "text-light" : "text-dark",
            )}
            data-bs-theme={useDarkMode ? "dark" : "light"}
        >
            <Header
                useDarkMode={useDarkMode}
                setUseDarkMode={setUseDarkMode}
                setTransitionState={setTransitionState}
            />
            <br />
            <Container>
                <Row>
                    <Col md="auto">
                        <InfoCard />
                    </Col>
                    <Col className={transitionState}>
                        <br />
                        <Routes>
                            <Route
                                index
                                element={<Navigate to="/home" replace />}
                            />
                            <Route
                                path="/home"
                                element={
                                    i18n.language === "en" ? (
                                        <EnHome />
                                    ) : (
                                        <EsHome />
                                    )
                                }
                            />
                            <Route
                                path="/projects"
                                element={
                                    i18n.language === "en" ? (
                                        <EnProjects />
                                    ) : (
                                        <EsProjects />
                                    )
                                }
                            />
                            <Route
                                path="/guides"
                                element={
                                    i18n.language === "en" ? (
                                        <EnGuides />
                                    ) : (
                                        <EsGuides />
                                    )
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    i18n.language === "en" ? (
                                        <EnAbout />
                                    ) : (
                                        <EsAbout />
                                    )
                                }
                            />
                        </Routes>
                    </Col>
                </Row>
            </Container>
            <Footer
                useDarkMode={useDarkMode}
                transitionState={transitionState}
            />
        </div>
    );
};

export default App;
