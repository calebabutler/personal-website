import { ReactNode } from "react";
import EnProjects from "../en-pages/Projects";

interface ProjectsProps {
    gitHubRepositories: ReactNode[];
}

const Projects = ({ gitHubRepositories }: ProjectsProps): ReactNode => {
    return <EnProjects gitHubRepositories={gitHubRepositories} />;
};

export default Projects;
