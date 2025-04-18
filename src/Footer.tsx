import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { TransitionState, UseDarkMode } from "./App";

interface FooterProps {
    transitionState: TransitionState;
    useDarkMode: UseDarkMode;
}

const Footer = ({ transitionState, useDarkMode }: FooterProps): ReactNode => {
    return (
        <footer
            className={"mt-auto p-1 fs-6 text-end "
                .concat(transitionState)
                .concat(useDarkMode ? " bg-dark-subtle" : " bg-light")}
        >
            <Container>
                <small>
                    <a
                        className="link-secondary"
                        href="https://github.com/calebabutler/personal-website"
                    >
                        GitHub Repository
                    </a>{" "}
                    |{" "}
                    <a className="link-secondary" href="feed.rss">
                        RSS Feed
                    </a>
                </small>
            </Container>
        </footer>
    );
};

export default Footer;
