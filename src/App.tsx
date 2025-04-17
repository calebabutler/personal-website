import { ReactNode, useState } from "react";
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

const App = (): ReactNode => {
    const [transitionState, setTransitionState]: [
        TransitionState,
        SetTransitionState,
    ] = useState("" as TransitionState);
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header setTransitionState={setTransitionState} />
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
            <Footer transitionState={transitionState} />
        </div>
    );
};

export default App;
