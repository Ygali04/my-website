import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/projectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../css-components/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;