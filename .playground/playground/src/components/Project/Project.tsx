import { FC } from "react";
import "../Project.css";

interface ProjectProps {
    name: string; 
    id: number;
    onRemove: (id: number) => void;
}

const Project: FC<ProjectProps> = (props) => {
    return <li onClick={() => props.onRemove(props.id)} className="project">{props.name}</li>
}

export default Project;