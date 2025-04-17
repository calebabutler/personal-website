import { ReactNode } from "react";
import { Container } from "react-bootstrap";

const Footer = (): ReactNode => {
    return (
        <footer className="bg-light p-1 fs-6 text-end">
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
