import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { TransitionState } from "./App";

interface FooterProps {
    transitionState: TransitionState;
}

const Footer = ({ transitionState }: FooterProps): ReactNode => {
    return (
        <footer
            className={"mt-auto bg-light p-1 fs-6 text-end " + transitionState}
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
