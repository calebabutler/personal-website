import { ReactNode } from "react";

const Home = (): ReactNode => {
    return (
        <>
            <p>
                Hello, I am Caleb. I work as a software developer. I am also
                very passionate about software development, specifically the{" "}
                <a href="https://www.yearofopen.org/november-open-perspective-what-is-open-web/what-is-the-open-web-and-why-is-it-important-submitted-by-mark-surman-executive-director-of-the-mozilla-foundation">
                    open web
                </a>{" "}
                and{" "}
                <a href="https://en.wikipedia.org/wiki/Self-hosting_(web_services)">
                    self-hosting
                </a>
                .
            </p>

            <p>
                I hope to use this website to share information about me, try
                out different web technologies, and share technical guides
                related to my interests.
            </p>
        </>
    );
};

export default Home;
