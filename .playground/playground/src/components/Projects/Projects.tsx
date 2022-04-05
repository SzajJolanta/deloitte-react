import { FC, useState } from "react"
import Project from "../Project/Project";

type Project = {
    name: string;
    id: number;
}

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
    const [projectsInState, setProjectsInState] = useState(projects);

    const removeProject = (id: number) => {
        setProjectsInState(projectsInState.filter(p => p.id !== id))
    }

    return (
        <ul>
            {
                projectsInState.map(project => <Project onRemove={removeProject} name={project.name} id={project.id} key={project.id} />)
            }
        </ul>
    )
}

export default Projects