import { ReactNode, useLayoutEffect, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InfoCard from "./InfoCard";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router";
import Projects from "./pages/Projects";
import Guides from "./pages/Guides";
import About from "./pages/About";

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
                            <Route path="/home" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/guides" element={<Guides />} />
                            <Route path="/about" element={<About />} />
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
