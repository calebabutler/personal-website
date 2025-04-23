import { ReactNode } from "react";
import { Row } from "react-bootstrap";

interface ProjectsProps {
    gitHubRepositories: ReactNode[];
}

const Projects = ({ gitHubRepositories }: ProjectsProps): ReactNode => {
    return (
        <p>
            <Row xs={1} md={2} className="g-4">
                {gitHubRepositories}
            </Row>
        </p>
    );
};

export default Projects;
