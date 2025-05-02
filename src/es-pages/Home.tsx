import { ReactNode } from "react";

const Home = (): ReactNode => {
    return (
        <>
            <p>
                Hola, me llamo Caleb. Trabajo como ingeniero de software.
                También me apasiona el ingeniería de software, especialmente el{" "}
                <a href="https://www.mozilla.org/es-MX/about/manifesto">
                    Internet abierto
                </a>{" "}
                y el{" "}
                <a href="https://es.wikipedia.org/wiki/Autoalojamiento_(servicios_web)">
                    autoalojamiento
                </a>
                .
            </p>
            <p>
                Espero utilizar este sitio web para compartir información acerca
                de mí, probar diferentes tecnologías de web, y compartir guías
                técnicas relacionadas con mis intereses.
            </p>
        </>
    );
};

export default Home;
