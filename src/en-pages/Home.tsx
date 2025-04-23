import { ReactNode } from "react";

const Home = (): ReactNode => {
    return (
        <>
            <p>
                Hello, I am Caleb. I am a software developer for work, but I am
                also very passionate about software development, specifically{" "}
                <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software">
                    free and open-source software
                </a>
                , the{" "}
                <a href="https://www.yearofopen.org/november-open-perspective-what-is-open-web/what-is-the-open-web-and-why-is-it-important-submitted-by-mark-surman-executive-director-of-the-mozilla-foundation">
                    open web
                </a>
                , the{" "}
                <a href="https://en.wikipedia.org/wiki/Fediverse">Fediverse</a>,
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
