import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InfoCard from "./InfoCard";
import { Card, Col, Container, Row } from "react-bootstrap";
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

interface Repo {
    full_name: string;
    description: string;
    html_url: string;
    fork: boolean;
    pushed_at: string;
}

const App = (): ReactNode => {
    const [transitionState, setTransitionState]: [
        TransitionState,
        SetTransitionState,
    ] = useState("" as TransitionState);

    const [useDarkMode, setUseDarkMode]: [UseDarkMode, SetUseDarkMode] =
        useState(false);

    const { i18n } = useTranslation();

    const [gitHubRepositories, setGitHubRepositories] = useState<ReactNode[]>(
        [],
    );

    const downloadGitHubRepositories = async () => {
        try {
            const repos = await fetch(
                "https://api.github.com/users/calebabutler/repos",
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                },
            );
            const response = await repos.json();
            setGitHubRepositories(
                response
                    .filter((repo: Repo) => !repo.fork)
                    .toSorted(
                        (repo1: Repo, repo2: Repo) =>
                            Date.parse(repo1.pushed_at) <
                            Date.parse(repo2.pushed_at),
                    )
                    .map((repo: Repo, idx: number) => (
                        <Col key={idx}>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>{repo.full_name}</Card.Title>
                                    <Card.Text>{repo.description}</Card.Text>
                                    <Card.Link href={repo.html_url}>
                                        {repo.html_url}
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )),
            );
        } catch {
            console.log("GET request failed.");
        }
    };

    // Set dark theme based on system theme
    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setUseDarkMode(true);
        }
    }, []);

    useEffect(() => {
        downloadGitHubRepositories();
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
                                        <EnProjects
                                            gitHubRepositories={
                                                gitHubRepositories
                                            }
                                        />
                                    ) : (
                                        <EsProjects
                                            gitHubRepositories={
                                                gitHubRepositories
                                            }
                                        />
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
